import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';


import { RouterModule, Routes } from '@angular/router';
import { ReminderdetailComponent } from './reminderdetail/reminderdetail.component';

import { FormsModule } from '@angular/forms';
import { NewreminderComponent } from './newreminder/newreminder.component';

const routes:Routes = [
  { path: '', redirectTo: '/gallery', pathMatch: 'full'},
  { path: 'gallery', component: GalleryComponent },
  { path: 'reminder/:id', component: ReminderdetailComponent } 
]

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ReminderdetailComponent,
    NewreminderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
