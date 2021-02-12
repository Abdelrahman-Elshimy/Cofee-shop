import { Component, OnInit } from '@angular/core';
import { SubpagesService } from 'src/app/shared/subpages.service';

@Component({
  selector: 'app-shared-section-top',
  templateUrl: './shared-section-top.component.html',
  styleUrls: ['./shared-section-top.component.css'],
})
export class SharedSectionTopComponent implements OnInit {
  title: string;
  constructor(private titleSection: SubpagesService) {
    this.title = this.titleSection.subPageTitle;
  }

  ngOnInit(): void {}
}
