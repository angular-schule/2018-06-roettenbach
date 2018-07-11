import { AppComponent } from './app.component';

describe('AppComponent', () => {

  it(`should have as title 'Book Rating'`, () => {
    const app = new AppComponent();
    expect(app.title).toEqual('Book Rating');
  });
});
