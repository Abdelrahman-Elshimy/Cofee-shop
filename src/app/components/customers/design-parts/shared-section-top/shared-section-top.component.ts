import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-section-top',
  templateUrl: './shared-section-top.component.html',
  styleUrls: ['./shared-section-top.component.css'],
})
export class SharedSectionTopComponent implements OnInit {
  title: string = 'Menu';
  constructor() {}

  ngOnInit(): void {}
}
