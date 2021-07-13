import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book';
import { SalesService } from './sales.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl: string = 'https://localhost:44379/';
  public books: Observable<Book[]> = of([]);
  public basket: Observable<Book[]> = of([]);

  constructor(private http: HttpClient, private salesService: SalesService) { }

  getBooksAll() {
    this.books = this.http.get<Book[]>(this.apiUrl + 'Books');
  }

  getBooks(code: string) {
    this.basket = this.http.get<Book[]>(`${this.apiUrl}Books/${code}`);
  }

  postBook(bookId: number) {
    this.salesService.promoCode.subscribe(x => this.http.post<any>(this.apiUrl + 'Books', {
      promoCodeId: x.id,
      bookId: bookId
    }).subscribe(() => {
      this.getBooksAll();
      this.getBooks(x.code);
    }));
  }

  deleteBook(bookId: number) {
    this.salesService.promoCode.subscribe(x => this.http.delete<any>(this.apiUrl + 'Books', {
      promoCodeId: x.id,
      bookId: bookId
    }).subscribe(() => {
      this.getBooksAll();
      this.getBooks(x.code);
    }));
  }
}
