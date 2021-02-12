import { Component, OnInit } from '@angular/core';
import { SubpagesService } from 'src/app/shared/subpages.service';
import { PageTitle } from '../design-parts/titlePage.enum';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private pageTitle: SubpagesService) {
    this.pageTitle.subPageTitle = PageTitle.about;
  }

  ngOnInit(): void {}
}
