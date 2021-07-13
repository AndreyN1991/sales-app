import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  displayedColumns: string[] = ['title', 'author', 'cost', 'action'];

  constructor(public salesService: SalesService, public booksService: BooksService) {
    salesService.promoCode.subscribe(x => booksService.getBooks(x.code));
  }

  ngOnInit(): void {
  }

  delete(id: number): void {
    
  }
}
