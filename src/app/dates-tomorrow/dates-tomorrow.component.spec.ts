import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesTomorrowComponent } from './dates-tomorrow.component';

describe('DatesTomorrowComponent', () => {
  let component: DatesTomorrowComponent;
  let fixture: ComponentFixture<DatesTomorrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatesTomorrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesTomorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
