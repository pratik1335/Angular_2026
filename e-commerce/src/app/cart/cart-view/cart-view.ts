import { Component, OnInit } from '@angular/core';
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

  cartItems : Product[] = [];

  constructor(private cartService : CartService){}

  ngOnInit() : void{
    this.cartService.getCartItems().subscribe(data => {
      this.cartItems = data;
    })
  }
}
