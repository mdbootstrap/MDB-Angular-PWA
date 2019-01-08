import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleItemComponent } from './schedule-item.component';

describe('ScheduleItemComponent', () => {
  let component: ScheduleItemComponent;
  let fixture: ComponentFixture<ScheduleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
