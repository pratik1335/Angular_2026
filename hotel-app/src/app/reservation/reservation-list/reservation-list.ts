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
    this.reservations = this.reservationService.getReservations();
  }

  deleteReservation(id : string){
    this.reservationService.deleteReservation(id);
  }

  back(){
    this.router.navigate(['/new'])
  }

}
