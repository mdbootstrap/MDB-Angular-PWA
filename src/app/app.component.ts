import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md';
import {FormControl} from '@angular/forms';

export interface Schedule {
  time: string;
  subject: string;
  location?: string;
  description?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ModalDirective) modal: ModalDirective;

  timeInput = new FormControl();
  subjectInput = new FormControl();
  locationInput = new FormControl();
  descriptionInput = new FormControl();

  items: Array<Schedule> = [
    {time: '08:00', subject: 'Breakfast with Simon', location: 'Lounge Caffe', description: 'Discuss Q3 targets'},
    {time: '08:30', subject: 'Daily Standup Meeting (recurring)', location: 'Warsaw Spire Office'},
    {time: '09:00', subject: 'Call with HRs'},
    {
      time: '12:00',
      subject: 'Lunch with Timmoty',
      location: 'Canteen',
      description: 'Project evalutation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a'
    },
  ];

  addNewItem() {
    const value: Schedule = {
      time: this.timeInput.value,
      subject: this.subjectInput.value,
      location: this.locationInput.value,
      description: this.descriptionInput.value
    };

    this.items.push(value);

    this.timeInput.setValue('');
    this.subjectInput.setValue('');
    this.locationInput.setValue('');
    this.descriptionInput.setValue('');

    this.modal.hide();
  }

}
