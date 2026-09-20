import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/product';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [MatCardModule, CurrencyPipe],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList implements OnInit{

  /*
    Now we want to get some products right.
    If we want to share the products that we will get just in a second with our HTML template, 
    we have to create a property here and share it using the interpolation.
    So we create the property which we call products.
  */
  
  // using signals to handle data not rendering issues
  products = signal<Product[]>([]);

  /*
    we first of all need an instance of our product service.
    So let's create a constructor to make use of the dependency injection 
    and can do that by creating a private product service here of type product service.
  */
  constructor(private productService : ProductService){}

  /*
    First of all, we have to think about when do we want to call that method?
    So at which point of our application and usually what we want to do here is 
    as soon as the component renders, right, we already want to have that data or fetch that data.
    So therefore we use the oninit lifecycle hook that you have already learned about.
  */
  ngOnInit(): void {
  this.productService.getProducts().subscribe(data => {
    this.products.set(data);
  });
}
}
