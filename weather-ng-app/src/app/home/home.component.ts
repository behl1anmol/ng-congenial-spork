import { Component, inject, signal } from '@angular/core';
import { Quote } from '../../model/quote.type';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  quotes = signal<Array<Quote>>([]);
  http = inject(HttpClient);

  getQuotes() {
    const url: string = 'https://dummyjson.com/quotes';
    this.http.get<{ quotes: Array<Quote> }>(url)
      .pipe(
        catchError((error) => {
          console.error('Error fetching quotes:', error);
          throw error;
        })
      ).subscribe((response) => {
        this.quotes.set(response.quotes);
      });
  }
}
