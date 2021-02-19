import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Api/api-service.service';
import { Good } from 'src/app/shared/interfaces/good.interface';
import { SubpagesService } from 'src/app/shared/subpages.service';
import { PageTitle } from '../design-parts/titlePage.enum';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  products: Array<Good>;
  constructor(
    private subPageTitle: SubpagesService,
    private apiService: ApiServiceService
  ) {
    this.subPageTitle.subPageTitle = PageTitle.shop;
    let productObservable = this.apiService.getAllProducts();
    productObservable.subscribe((products: Array<Good>) => {
      this.products = products;
    });
  }

  ngOnInit(): void {}
}
