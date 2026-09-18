import { Injectable, Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class CartService {

    apiUrl = environment.apiUrl + '/cart';

    constructor(private http : HttpClient){}

    addCart(product : Product) : Observable<Product>{
        return this.http.post<Product>(this.apiUrl, product);
    }

    getCartItems() : Observable<Product[]>{
        return this.http.get<Product[]>(this.apiUrl);
    }

    removeCart() : Observable<void>{
        return this.http.delete<void>(this.apiUrl)
    }
}
