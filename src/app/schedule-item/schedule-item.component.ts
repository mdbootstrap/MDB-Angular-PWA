import {Component, Input, OnInit} from '@angular/core';
import {Schedule} from '../app.component';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent implements OnInit {
  @Input() value: Schedule;
  constructor() { }

  ngOnInit() {
  }

}
