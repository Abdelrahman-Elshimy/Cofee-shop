import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSectionTopComponent } from './shared-section-top.component';

describe('SharedSectionTopComponent', () => {
  let component: SharedSectionTopComponent;
  let fixture: ComponentFixture<SharedSectionTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedSectionTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSectionTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
