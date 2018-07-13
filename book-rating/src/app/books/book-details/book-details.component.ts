import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, retry, concatMap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
    this.book$ = this.route.paramMap.pipe(
      map(paramMap => paramMap.get('isbn')),
      concatMap(isbn => this.bs.get(isbn)),
      retry(3)
    );
  }
}
