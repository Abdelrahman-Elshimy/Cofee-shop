import { Component, OnInit } from '@angular/core';
import { SubpagesService } from 'src/app/shared/subpages.service';
import { PageTitle } from '../design-parts/titlePage.enum';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  total: number = 0;
  carts = [
    {
      img: '../assets/images/menu-2.jpg',
      name: 'CREAMY LATTE COFFEE',
      desc: 'Far far away, behind the word mountains, far from the countries',
      price: 4,
      amount: 1,
    },
    {
      img: '../assets/images/menu-3.jpg',
      name: 'CREAMY LATTE COFFEE',
      desc: 'Far far away, behind the word mountains, far from the countries',
      price: 5,
      amount: 3,
    },
  ];
  constructor(private subPageTitle: SubpagesService) {
    this.carts.forEach((el) => {
      this.total = el.price * el.amount + this.total;
    });
    this.subPageTitle.subPageTitle = PageTitle.cart;
  }

  ngOnInit(): void {}
  removeCart(cart) {
    console.log(cart);
    this.carts.splice(cart, cart + 1);
  }
}
