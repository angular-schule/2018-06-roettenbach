import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {

  @Input() book: Book;
  @Output() rate = new EventEmitter<Book>(true);

  constructor(private rs: BookRatingService) {
  }

  rateUp() {
    const ratedBook = this.rs.rateUp(this.book);
    console.log(1);
    this.rate.emit(ratedBook);
    console.log(3);
  }

  rateDown() {
    const ratedBook = this.rs.rateDown(this.book);
    this.rate.emit(ratedBook);
  }
}
