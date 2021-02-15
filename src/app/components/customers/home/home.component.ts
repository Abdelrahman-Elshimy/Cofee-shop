import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Good } from 'src/app/shared/interfaces/good.interface';
import * as AOS from 'aos';
import { ApiServiceService } from 'src/app/Api/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig],
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
export class HomeComponent implements OnInit {
  tabs = 'dish';
  images = ['bg_1.jpg', 'bg_2.jpg', 'bg_3.jpg'].map(
    (n) => `../assets/images/${n}`
  );
  success = [];
  errorForm = '';
  constructor(
    config: NgbCarouselConfig,
    private apiService: ApiServiceService
  ) {
    config.showNavigationArrows = false;
  }

  ngOnInit(): void {
    AOS.init();
  }

  changeTab(tab) {
    this.tabs = tab;
  }

  book(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      const observeAddTable = this.apiService.bookATable(form.value);
      console.log(observeAddTable);

      observeAddTable.subscribe((data) => {
        this.success.push({ message: 'Table Booked Successfully' });
        setTimeout(() => {
          this.success = [];
        }, 4000);
        form.resetForm();
      });
    } else {
      this.errorForm = 'Please Entre all infromation required';
    }
  }
}
