import { Component, OnInit } from '@angular/core';
import {ReminderService} from '../reminder.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [ReminderService]
})
export class GalleryComponent implements OnInit {


  constructor(private reminderService:ReminderService){

  }
	
  coursename = "CSCI E31";
  reminders = null;
  reminderUrl = '';

  ngOnInit(){
    this.reminderService.listReminders().subscribe((reminder)=>{
    this.reminders = reminder;
    this.reminderUrl = this.reminderService.reminderUrl;
  });;
  }
  updateReminderList():void{
  	    this.reminderService.listReminders().subscribe((reminder)=>{
    this.reminders = reminder;
    this.reminderUrl = this.reminderService.reminderUrl;
  });;

  }
}
