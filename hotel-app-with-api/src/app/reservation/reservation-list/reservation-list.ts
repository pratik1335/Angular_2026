import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../models/reservations';
import { ReservationService } from '../../services/reservation';
import { Router, RouterLink } from '@angular/router';
import { Home } from "../../home/home";

@Component({
  imports: [RouterLink, Home],
  selector: 'app-reservation-list',
  styleUrl: './reservation-list.css',
  templateUrl: './reservation-list.html',
})
export class ReservationList implements OnInit {

  constructor(
    private reservationService : ReservationService,
    private router : Router
  ){}

  reservations : Reservation[] = [];

  ngOnInit(): void {
    // this.reservations = this.reservationService.getReservations();

    /*
      So in Ngoninit we take our reservation service, we call the asynchronous get Reservations method,
      which is sending a request to our backend API which returns an observable.
      We are subscribing to that observable and once it's done so, once the observable has completed, for
      example, we can get the returned value, which could be our reservations and then we create an arrow function,
      take these reservations from the actual response and then put it as the value of our reservations property.
    */
    this.reservationService.getReservations().subscribe( reservations => {
      this.reservations = reservations;
      console.log("API DATA:", reservations);
    });
  }

  deleteReservation(id : string){
    this.reservationService.deleteReservation(id);
  }

  back(){
    this.router.navigate(['/new'])
  }

}
