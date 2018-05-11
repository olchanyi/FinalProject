import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderdetailComponent } from './reminderdetail.component';

describe('ReminderdetailComponent', () => {
  let component: ReminderdetailComponent;
  let fixture: ComponentFixture<ReminderdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
