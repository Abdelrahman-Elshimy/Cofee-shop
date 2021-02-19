import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Api/api-service.service';
import { SubpagesService } from 'src/app/shared/subpages.service';
import { PageTitle } from './../design-parts/titlePage.enum';

import * as AOS from 'aos';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  productsOfCategories;
  constructor(
    private subTitle: SubpagesService,
    private apiSerive: ApiServiceService
  ) {
    this.subTitle.subPageTitle = PageTitle.menu;
    this.apiSerive.getProductsOfEachCategory().subscribe((data) => {
      this.productsOfCategories = data;
    });
  }

  ngOnInit(): void {
    AOS.init();
  }
}
