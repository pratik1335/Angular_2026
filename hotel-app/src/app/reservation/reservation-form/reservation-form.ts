import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReservationService } from '../../services/reservation';
import { Router, ActivatedRoute } from '@angular/router';
import { Home } from "../../home/home";
import { Reservation } from '../../models/reservations';

@Component({
  imports: [FormsModule, ReactiveFormsModule, Home],
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
    private router : Router,
    private activatedRoute : ActivatedRoute
  ){}

  ngOnInit() : void{
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    })

    // In ngOnInit(), we get the ID from the URL, find the existing reservation using that ID, 
    // and use patchValue() to populate the Edit Form with its data.

    // check if we can get an id from the activated route
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id){
      // Get the reservation using the ID from the URL.
      // The reservation can be undefined if the ID does not exist.
      let reservation = this.reservationService.getReservation(id);

      // we are patching the value for the reservation.
      // And this can only work if we know that we for sure have a reservation 
      // because we can get an undefined here.
      // Fill the form with the existing reservation data.
      // This is used when editing an existing reservation.
      if(reservation)
        this.reservationForm.patchValue(reservation);
    }
  }

  onSubmit(){
    if(this.reservationForm.valid){
      // console.log("valid!!");

      let reservation: Reservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if(id){
        // Update the existing reservation
        this.reservationService.updateReservation(id, reservation);
      } else {
        // New reservation
        // add the created form as reservation data to the reservation service.
        // This will add the reservation to the list of reservations in the service.
        this.reservationService.addReservation(reservation); 
      }

      
      // Navigate or redirect to the list page once the form gets submitted.
      this.router.navigate(['/list']);
      
    }    
  }
}
