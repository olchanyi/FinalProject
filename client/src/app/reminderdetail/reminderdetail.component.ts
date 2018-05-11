import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReminderService} from '../reminder.service';


@Component({
  selector: 'app-reminderdetail',
  templateUrl: './reminderdetail.component.html',
  styleUrls: ['./reminderdetail.component.css'],
  providers: [ ReminderService ]
})

export class ReminderdetailComponent implements OnInit {

	reminder:any = {};
	reminderdisplayurl:string='';


  constructor(private route: ActivatedRoute,
         private reminderService:ReminderService,
         private router: Router ) { }

  ngOnInit() {
  	this.getReminder();
  }

	getReminder(): void{
		const param = this.route.snapshot.paramMap.get('id');
  		this.reminderService.getReminder(param)
   		.subscribe((reminder) => {
     		this.reminder = reminder;
     		this.reminderdisplayurl = this.reminderService.reminderUrl;
   });
	}

	updateReminder(obj:any):void {
		this.reminder.item = obj.itemField;
		this.reminder.importance = obj.importanceField;
		this.reminderService.updateReminder(this.reminder._id, this.reminder)
		 .subscribe((result)=>{
		   location.reload();
		});
}  
	deleteReminder(){
  if (confirm(`Are you sure you want to delete reminder?`)){
    console.log(`deleting ${this.reminder._id}`);
    this.reminderService.deleteReminder(this.reminder._id)
      .subscribe((result)=>{
        alert('Reminder Deleted');
        this.router.navigate(['/gallery']);
      })
    }
}

}
