import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservations';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ReservationService {

    /* Http requests are not synchronous. They are asynchronous because they have to get processed from the database from the backend API. */

    // Base URL, get it from mockoon
    private apiUrl = "http://localhost:3001";

    // use DI to get the Http client access.
    constructor(private http : HttpClient){}

    private reservations : Reservation[] = [];

    // the return type of this method is observable of type reservation array.
    // And what this is basically doing is it's an asynchronous way on how we can wait for a result.
    getReservations() : Observable<Reservation[]>{
        /*
            We are sending a request to an external API. This one is running on a different port.
            It's an entire different software. So we are sending it and it takes some time until we get the result.
            So we are creating an observable, which basically means that we are just sending it out 
            and now it's getting processed and we are waiting for the actual result or response.
            And now everyone who's calling that get reservation method here can subscribe to this observable. Just like an event.
            You can subscribe to it, you can listen to it and wait for the result.
            So right now, this is not the type reservation array. It's an observable which could return a reservation array.
            And we can wait for it by subscribing to it. And once the request got processed entirely 
            and we have any kind of result could be an error or could be like a success, 
            then everyone who was subscribed to the observable will get notified and can then move on with whatever it wanted to do with the actual result.

            We can subscribe to observables to get notified when the processing of this Http request is done.
        */
        return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
    }

    // READ operation
    // search the correct reservation by id
    getReservation(id: string) : Observable<Reservation>{
        return this.http.get<Reservation>(this.apiUrl + "/reservation/" + id);
    }

    // add resrvation : CREATE operation
    addReservation(reservation : Reservation) : Observable<void> {
        return this.http.post<void>(this.apiUrl + "/reservation", reservation);
    }

    // delete reservation : DELETE operation
    deleteReservation(id: string): Observable<void> {
        return this.http.delete<void>(this.apiUrl + "/reservation/" + id);
    }

    // update reservation : UPDATE operation
    updateReservation(id: string, updatedReservation : Reservation): Observable<void>{
        return this.http.put<void>(this.apiUrl + "/reservation/" + id, updatedReservation);
    }
}
