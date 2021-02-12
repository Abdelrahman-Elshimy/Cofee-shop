import { Component, OnInit } from '@angular/core';
import { SubpagesService } from 'src/app/shared/subpages.service';
import { PageTitle } from '../design-parts/titlePage.enum';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  title: string;
  constructor(private subTitle: SubpagesService) {
    this.subTitle.subPageTitle = PageTitle.services;
  }

  ngOnInit(): void {}
}
