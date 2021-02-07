import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/interfaces/good.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images = ['bg_1.jpg', 'bg_2.jpg', 'bg_3.jpg'].map(
    (n) => `../assets/images/${n}`
  );
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
  constructor() {}

  ngOnInit(): void {}
}
