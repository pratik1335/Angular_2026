import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-reservation-form',
  styleUrl: './reservation-form.css',
  templateUrl: './reservation-form.html',
})
export class ReservationForm implements OnInit {
  reservationForm : FormGroup = new FormGroup({})

  // It gets invoked as soon as this component class object gets initialized
  constructor(private formBuilder : FormBuilder){}

  ngOnInit() : void{
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    })
  }

  onSubmit(){
    if(this.reservationForm.valid){
      console.log("valid!!");
      
    }    
  }
}
