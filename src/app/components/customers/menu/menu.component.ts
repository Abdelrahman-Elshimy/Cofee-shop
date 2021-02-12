import { Component, OnInit } from '@angular/core';
import { SubpagesService } from 'src/app/shared/subpages.service';
import { PageTitle } from './../design-parts/titlePage.enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private subTitle: SubpagesService) {
    this.subTitle.subPageTitle = PageTitle.menu;
  }

  ngOnInit(): void {}
}
