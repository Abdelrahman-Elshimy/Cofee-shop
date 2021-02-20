import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Good } from 'src/app/shared/interfaces/good.interface';
import * as AOS from 'aos';
import { ApiServiceService } from 'src/app/Api/api-service.service';
import { BookTable } from 'src/app/shared/interfaces/bookTable.interface';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate(
          1000,
          style({
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  tabs = 'Dish';
  images = ['bg_1.jpg', 'bg_2.jpg', 'bg_3.jpg'].map(
    (n) => `../assets/images/${n}`
  );
  success = [];
  errorForm = '';
  bestSellerCoffes: Array<Good>;
  productsOfCategories;
  constructor(
    config: NgbCarouselConfig,
    private apiService: ApiServiceService,
    private router: Router
  ) {
    config.showNavigationArrows = false;
    this.apiService.getProductsOfEachCategory().subscribe((data) => {
      this.productsOfCategories = data;
      console.log(this.productsOfCategories);
    });
    this.apiService
      .getBestSelllerOfCoffeeCategory()
      .subscribe((data: Array<Good>) => {
        this.bestSellerCoffes = data;
      });
  }

  ngOnInit(): void {
    AOS.init();
  }

  changeTab(tab) {
    this.tabs = tab;
  }

  book(form: NgForm) {
    if (form.valid) {
      let book: BookTable = {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        date: form.value.date,
        time: form.value.time,
        phone: form.value.phone,
        message: form.value.message,
      };
      const observeAddTable = this.apiService.bookATable(book);
      observeAddTable.subscribe((data) => {
        this.success.push({ message: 'Table Booked Successfully' });
        setTimeout(() => {
          this.success = [];
        }, 4000);
        form.resetForm();
      });
    } else {
      this.errorForm = 'Please Entre all infromation required';
    }
  }
  navigateToProductPage(id) {
    this.router.navigate(['product', { id: id }]);
  }
}
