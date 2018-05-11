import { Component, OnInit } from '@angular/core';
import { ReminderService} from '../reminder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newreminder',
  templateUrl: './newreminder.component.html',
  styleUrls: ['./newreminder.component.css']
})
export class NewreminderComponent implements OnInit {

	reminder:any = {};	

  constructor(private reminderService:ReminderService,
  	private router: Router) { 
  }

  ngOnInit() {
  }

  save(newreminderForm) : void {
  		this.reminderService.createReminder(this.reminder)
	  .subscribe((reminder)=>{
	   });
	  this.router.navigate(['/gallery/']);
}
}
