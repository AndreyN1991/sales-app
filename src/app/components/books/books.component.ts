import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  dataSource: Book[] = [];

  constructor(public booksService: BooksService) {
    this.booksService.getBooks().subscribe(x => this.dataSource = x);
  }

  ngOnInit(): void {
  }
}
