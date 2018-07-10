import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

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