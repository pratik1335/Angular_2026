import { Component, OnInit, signal } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { Product } from '../../models/product';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [MatButtonModule, MatCardModule, MatListModule, CurrencyPipe],
  selector: 'app-cart-view',
  styleUrl: './cart-view.css',
  templateUrl: './cart-view.html',
})
export class CartView implements OnInit {

  // using signals to handle data not rendering issues
  cartItems = signal<Product[]>([]);

  totalPrice : number = 0;

  constructor(private cartService : CartService){}

  ngOnInit() : void{
    this.cartService.getCartItems().subscribe(data => {
      this.cartItems.set(data);

      this.totalPrice = this.getTotalPrice();
    })
  }

  getTotalPrice() : number{
    let total = 0;

    for(let item of this.cartItems()){
      total += item.price;
    }

    return total;
  }
}
