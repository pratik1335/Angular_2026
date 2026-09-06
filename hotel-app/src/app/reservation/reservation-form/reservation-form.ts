import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReservationService } from '../../services/reservation';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-reservation-form',
  styleUrl: './reservation-form.css',
  templateUrl: './reservation-form.html',
})
export class ReservationForm implements OnInit {
  reservationForm : FormGroup = new FormGroup({})

  // It gets invoked as soon as this component class object gets initialized
  constructor(
    private formBuilder : FormBuilder,
    private reservationService : ReservationService,
    private router : Router
  ){}

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
      // console.log("valid!!");

      let reservation = this.reservationForm.value;

      this.reservationService.addReservation(reservation); 
      
      // Navigate or redirect to the list page once the form gets submitted.
      this.router.navigate(['/list']);
      
    }    
  }
}
