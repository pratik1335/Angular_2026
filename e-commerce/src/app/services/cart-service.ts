import { Injectable, Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class CartService {

    // this url is for Cart
    apiCartUrl = environment.apiUrl + '/cart';

    // this url is for checkout
    apiCheckoutUrl = environment.apiUrl + '/checkout';

    constructor(private http : HttpClient){}

    
    // Observable<Product> to get the info that you have added this product in the cart.
    addToCart(product : Product) : Observable<Product>{
        return this.http.post<Product>(this.apiCartUrl, product);
    }
    

    getCartItems() : Observable<Product[]>{
        return this.http.get<Product[]>(this.apiCartUrl);
    }

    clearCart() : Observable<void>{
        return this.http.delete<void>(this.apiCartUrl)
    }

    // Return type is void, because we are just submitting the information, not returning anything.
    checkoutCart(products : Product[]) : Observable<void>{
        return this.http.post<void>(this.apiCheckoutUrl, products);
    }
}
