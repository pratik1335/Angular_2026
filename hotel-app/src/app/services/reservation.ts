import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservations';

/*
  Dependency injection in Angular is basically means that we are now able to inject the reservation service into a constructor.
  So wherever we need the reservation service, we can simply go into the constructor of another class
  and say, Hey, please, angular dependency injection, go ahead and inject an instance of this reservation
  service for me.
*/

@Injectable({
    providedIn: 'root'
})

export class ReservationService {

    private reservations : Reservation[] = [];

    /*
      So this is happening before the ngOnInit lifecycle hook is getting invoked.
      That's important because later on we want to load the data from the service from the component in a
      lifecycle hook and that one will get invoked after the construct of the service is getting invoked.
      So this is just important by timing because if we would put this now into an on init lifecycle hook,
      the data would not be loaded when we need it in the component. So this is why we use the constructor here.
      So the only thing for you to keep in mind now is the constructor is getting loaded before the ngOnInit lifecycle hook.
    */
    constructor(){
        let savedReservations = localStorage.getItem('reservations');
        this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
    }

    // CRUD

    // READ operation
    // list of all the resrvations
    getReservations() : Reservation[]{
        return this.reservations;
    }

    // READ operation
    // search the correct reservation by id
    getReservation(id: string) : Reservation | undefined{
        return this.reservations.find(res => res.id === id);
    }

    // add resrvation : CREATE operation
    addReservation(reservation : Reservation) : void {
        // user should not create the id, the system should create it. 
        // thats why we will have id created here when a new reservation is created.
        reservation.id = Date.now().toString();

        this.reservations.push(reservation);
        // console.log(this.reservations);

        localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }

    // delete reservation : DELETE operation
    deleteReservation(id: string): void {
        let index = this.reservations.findIndex(res => res.id === id);

        if(index !== -1){
            this.reservations.splice(index,1);
            localStorage.setItem('reservations', JSON.stringify(this.reservations));
        }
    }

    // COMPLEX Feature
    // update reservation : UPDATE operation
    // updateReservation(updatedReservation : Reservation): void{
    updateReservation(id: string, updatedReservation : Reservation): void{
        // let index = this.reservations.findIndex(res => res.id === updatedReservation.id);
        let index = this.reservations.findIndex(res => res.id === id);

        if(index !== -1){
            // Note: While updating a reservation, the form value does not contain the ID, so we must preserve the existing ID before replacing the old reservation object.
            // this is done to avoid the bug:
            // First reservation create → Edit → ID works, Second reservation create → first reservation's ID "undefined"
            updatedReservation.id = id;
            this.reservations[index] = updatedReservation;
            localStorage.setItem('reservations', JSON.stringify(this.reservations));
        }
    }
}
