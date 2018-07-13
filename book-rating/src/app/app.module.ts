import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksModule } from './books/books.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,      // Reihenfolge matters!
    AppRoutingModule, // Reihenfolge matters!
    HttpClientModule, // ausnahme MUSS oben bleiben wg. Interceptoren
  ],
  providers: [
    // BookRatingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
