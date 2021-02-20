import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/Api/api-service.service';
import { Good } from 'src/app/shared/interfaces/good.interface';
import { SubpagesService } from 'src/app/shared/subpages.service';
import { PageTitle } from '../design-parts/titlePage.enum';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  productId;
  product;
  constructor(
    private subPageTitle: SubpagesService,
    private route: ActivatedRoute,
    private apiService: ApiServiceService
  ) {
    this.subPageTitle.subPageTitle = PageTitle.singleProduct;
    this.route.paramMap.subscribe((data) => {
      this.productId = data.get('id');
      this.apiService.getProductData(this.productId).subscribe((data) => {
        this.product = data;
        console.log(this.product);
      });
    });
  }

  ngOnInit(): void {}
}
