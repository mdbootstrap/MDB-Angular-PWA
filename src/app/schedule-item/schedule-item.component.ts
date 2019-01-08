import {Component, Input} from '@angular/core';
import {Schedule} from '../app.component';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent {
  @Input() value: Schedule;
  constructor() { }
}
