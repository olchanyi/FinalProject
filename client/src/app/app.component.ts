import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ReminderService} from './reminder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ReminderService]
})
export class AppComponent {

  }

