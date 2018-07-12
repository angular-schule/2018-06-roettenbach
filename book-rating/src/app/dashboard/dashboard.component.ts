import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private bs: BookStoreService) { }

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

  addBook(book: Book) {
    this.books = [...this.books, book];
  }

  ngOnInit() {

    this.bs.getAll()
      .pipe(
        // take(1) -- not required here
      )
    .subscribe(
      books => this.books = books,
      err => console.error(err)
    );

    // Zukunft
    /*
    this.bs.getAll()
      |> take(1)
      |> filter(xxx)
    .subscribe(books => this.books = books);
    */
  }
}
