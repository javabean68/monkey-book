import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book'

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books : Book[]  = [];
  @Output() showDetailsEvent = new EventEmitter<Book>();

  showDetails(book: Book) {
    this.showDetailsEvent.emit(book)
  }

  ngOnInit(): void {
    this.books = [
      {
        isbn: '978999999',
        title: 'Angular',
        authors: ['Ferdinand Malcher'],
        published: new Date(2020, 8, 1),
        subtitle: "Grundlagen",
        rating: 5,
        thumbnails: [
        {
          url: 'https://ng-buch.de/angular-cover.jpg',
          title: 'Buchcover'
        }
        ]
      }
    ]
  }

}
