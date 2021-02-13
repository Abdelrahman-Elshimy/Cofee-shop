import { Component, OnInit } from '@angular/core';
import { SubpagesService } from 'src/app/shared/subpages.service';
import { PageTitle } from '../design-parts/titlePage.enum';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  constructor(private subPageTitle: SubpagesService) {
    this.subPageTitle.subPageTitle = PageTitle.singleProduct;
  }

  ngOnInit(): void {}
}
