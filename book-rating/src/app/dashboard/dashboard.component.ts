import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  reorderBooks(book: Book) {
    console.log(2, book);

    // OPTION A
    this.books = this.books
      .map(b => b.isbn === book.isbn ? book : b)
      .sort((a, b) => b.rating - a.rating);

    //#region :-)
    // OPTION B
    /*
    const cleanedList = this.books.filter(b => b.isbn !== book.isbn);
    this.books = [...cleanedList, book]
      .sort((a, b) => b.rating - a.rating);
    */
   //#endregion
  }

  ngOnInit() {
    this.books = [{
      isbn: '000',
      title: 'Angular',
      description: 'Grundlagen, fortgeschrittene...',
      rating: 5
    }, {
      isbn: '11',
      title: 'AngularJS',
      description: 'das alte Framework',
      rating: 4
    }];
  }
}
