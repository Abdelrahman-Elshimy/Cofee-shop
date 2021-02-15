import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  bookATable(book) {
    return this.http.post(this.URL + 'bookings', book);
  }
}
