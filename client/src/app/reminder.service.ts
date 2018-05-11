import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable()
export class ReminderService {
		private apiurl = environment.apiurl;
		reminderUrl = environment.reminderUrl;
		constructor(private http:HttpClient) { }
  

  // basic list method
listReminders(){
  //return this.http.get('http://localhost:8080/' + 'api/reminders');
  console.log(this.apiurl);
  return this.http.get(this.apiurl + 'api/reminders');
}
getReminder(id){
  //return this.http.get('http://localhost:8080/' + 'api/reminders/' + id);
  return this.http.get(this.apiurl + 'api/reminders/' + id);
}

updateReminder(id, data) {
	return this.http.put(this.apiurl + 'api/reminders/' + id, data);
}

createReminder(data){
	return this.http.post(this.apiurl + 'api/reminders/', data, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'}});

}

deleteReminder(id) {
	return this.http.delete(this.apiurl + 'api/reminders/' + id);

}
}
