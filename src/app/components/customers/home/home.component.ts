import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Good } from 'src/app/interfaces/good.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent implements OnInit {
  tabs = 'dish';
  images = ['bg_1.jpg', 'bg_2.jpg', 'bg_3.jpg'].map(
    (n) => `../assets/images/${n}`
  );

  errorForm = '';
  goods: Array<Good> = [
    {
      name: 'Apple',
      price: 4.3,
      photoUrl: 'assets/images/headphone.jpg',
      description: 'Headphone',
    },
    {
      name: 'Apple',
      price: 4.3,
      photoUrl: 'assets/images/headphone.jpg',
      description: 'Headphone',
    },
    {
      name: 'Apple',
      price: 4.3,
      photoUrl: 'assets/images/headphone.jpg',
      description: 'Headphone',
    },
    {
      name: 'Apple',
      price: 4.3,
      photoUrl: 'assets/images/headphone.jpg',
      description: 'Headphone',
    },
  ];
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
  }

  ngOnInit(): void {}

  changeTab(tab) {
    this.tabs = tab;
  }

  book(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    } else {
      this.errorForm = 'Please Entre all infromation required';
    }
  }
}
