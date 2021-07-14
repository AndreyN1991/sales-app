import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Basket } from '../models/basket';
import { Book } from '../models/book';
import { SalesService } from './sales.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl: string = 'https://localhost:44379/';
  public books: Observable<Book[]> = of([]);
  public basket: Observable<Basket[]> = of([]);
  public basketSum: Observable<number> = of(0);

  constructor(private http: HttpClient, private salesService: SalesService) { }

  getBooksAll() {
    this.books = this.http.get<Book[]>(this.apiUrl + 'Books');
  }

  getBooks(code: string) {
    this.basket = this.http.get<Basket[]>(`${this.apiUrl}Books/${code}`);
  }

  calcBasketSum() {
    this.basket.subscribe(x => this.basketSum = of(x.map(i => i.cost).reduce((p, n) => p + n)));
  }

  postBook(bookId: number) {
    this.basket.subscribe(b => {
      if(b.find(i => i.bookId === bookId) === undefined) {
        this.salesService.promoCode.subscribe(x => this.http.post<any>(this.apiUrl + 'Books', {
          promoCodeId: x.id,
          bookId: bookId
        }).subscribe(() => {
          this.getBooksAll();
          this.getBooks(x.code);
          this.calcBasketSum();
        }));
      }
    });
  }

  deleteBook(id: number) {
    this.salesService.promoCode.subscribe(x => this.http.delete<any>(`${this.apiUrl}Books/${id}`).subscribe(() => {
      this.getBooksAll();
      this.getBooks(x.code);
      this.calcBasketSum();
    }));
  }
}
