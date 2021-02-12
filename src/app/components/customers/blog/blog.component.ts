import { Component, OnInit } from '@angular/core';
import { SubpagesService } from 'src/app/shared/subpages.service';
import { PageTitle } from '../design-parts/titlePage.enum';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  constructor(private subPageTitle: SubpagesService) {
    this.subPageTitle.subPageTitle = PageTitle.blog;
  }

  ngOnInit(): void {}
}
