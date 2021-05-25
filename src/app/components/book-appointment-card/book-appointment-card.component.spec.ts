import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAppointmentCardComponent } from './book-appointment-card.component';

describe('BookAppointmentCardComponent', () => {
  let component: BookAppointmentCardComponent;
  let fixture: ComponentFixture<BookAppointmentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAppointmentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAppointmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
