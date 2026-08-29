import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  imports: [FormsModule, DatePipe],
  selector: 'app-appointment-list',
  styleUrl: './appointment-list.css',
  templateUrl: './appointment-list.html',
})
export class AppointmentList implements OnInit {

  // appointment : string = 'Study for 30 minutes';

  // appointment : Appointment = {
  //   id : 1,
  //   title : 'Study for 30 minutes',
  //   date : new Date(),
  // }

  appointments : Appointment[] = [];

  newAppointmentTitle : string = '';

  newAppointmentDate : Date = new Date("yyyy-MM-dd");

  // This hook is called whenever a component is created and initialized.
  // also whenever we reload the page then the component is created and initialized
  ngOnInit(): void {

    // Getting the key of JSON string stored in the local storage
    let saveAppointments = localStorage.getItem('appointments');

    // check if we have appointments key inside the local storage, 
    // if yes, then convert JSON string into JS or TS object format using parse method,
    // if no, then invoke an empty array
    this.appointments = saveAppointments ? JSON.parse(saveAppointments) : [];
  }

  addNewAppointment(){
    // alert(this.newAppointmentDate + ' ' + this.newAppointmentTitle);

    // check if the title and date fields are not empty, we will use pipe later for fixing the date bug
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){

      // new appointment object
      let newAppointment : Appointment = {
        id : Date.now(),
        title : this.newAppointmentTitle,
        date : this.newAppointmentDate,
      }
      
      this.appointments.push(newAppointment);
      
      // Reset the inputs
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();
      
      // console.log(this.appointments.length);
      // console.log(this.appointments);

      // convert the JS or TS object into JSON string and save it into local storage
      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }

  }

  deleteAppointment(index : number){
    this.appointments.splice(index, 1);

    localStorage.setItem('appointments', JSON.stringify(this.appointments))
  }

}
