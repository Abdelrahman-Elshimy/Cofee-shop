import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private URL = 'https://coffee-shop-api-abdelrahman.herokuapp.com/';
  constructor(private http: HttpClient) {}

  // Booking tables
  bookATable(book) {
    return this.http.post(this.URL + 'bookings', book);
  }

  // products Api End Points

  // Get all Products
  getAllProducts() {
    return this.http.get(this.URL + 'products');
  }

  // Get Best Seller Of Coffee Products
  getBestSelllerOfCoffeeCategory() {
    return this.http.get(this.URL + 'products/getBestSellersCoffee');
  }

  // get products of each category
  getProductsOfEachCategory() {
    return this.http.get(this.URL + 'products/getProductsOfeacCategory');
  }

  // get products of each category
  getProductData(id) {
    return this.http.get(this.URL + 'products/' + id);
  }
}
