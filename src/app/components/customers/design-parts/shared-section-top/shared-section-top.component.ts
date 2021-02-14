import { Component, OnInit } from '@angular/core';
import { SubpagesService } from 'src/app/shared/subpages.service';
import * as AOS from 'aos';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-shared-section-top',
  templateUrl: './shared-section-top.component.html',
  styleUrls: ['./shared-section-top.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate(
          1000,
          style({
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class SharedSectionTopComponent implements OnInit {
  title: string;
  constructor(private titleSection: SubpagesService) {
    this.title = this.titleSection.subPageTitle;
  }

  ngOnInit(): void {
    AOS.init();
  }
}
