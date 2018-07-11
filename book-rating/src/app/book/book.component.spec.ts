import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { BookRatingService } from '../shared/book-rating.service';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  // smallest possible mock!
  let hasBeenCalled = false;
  const ratingMock = {
    rateUp: () => hasBeenCalled = true
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      providers: [{
        provide: BookRatingService,
        useValue: ratingMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    component.book = {
      isbn: '000',
      title: '',
      description: '',
      rating: 1
    };

    fixture.detectChanges();
  });

  it('should forward the rateUp call to the book rating service', () => {
    component.rateUp();
    expect(hasBeenCalled).toBe(true);
  });
});
