import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/product';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart-service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';

@Component({
  imports: [MatCardModule, CurrencyPipe, MatSnackBarModule, MatInputModule],
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

  // Filtered array after the user search for any product and the matching products will appear
  // filteredProducts : Product[] = [];
  filteredProducts = signal<Product[]>([]);

  /*
    we first of all need an instance of our product service.
    So let's create a constructor to make use of the dependency injection 
    and can do that by creating a private product service here of type product service.
  */
  constructor(private productService : ProductService, 
    private cartService : CartService,
    private snackbar : MatSnackBar  
  ){}

  /*
    First of all, we have to think about when do we want to call that method?
    So at which point of our application and usually what we want to do here is 
    as soon as the component renders, right, we already want to have that data or fetch that data.
    So therefore we use the oninit lifecycle hook that you have already learned about.
  */
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products.set(data);

      // so that we can initialize this filtered products to contain all the products.
      this.filteredProducts.set(data);
    });
  }

  addToCart(product: Product) : void{
    this.cartService.addToCart(product).subscribe({
      // success statement (call was successful)
      next: () => {
        this.snackbar.open("Product added to cart!", "", {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        })
      }
    });
  }

  // Filter method
  applyFilter(event : Event): void{
    // Read the value from the entire input field
    let searchTerm = (event.target as HTMLInputElement).value;

    // Convert it into lower case, as the user most of time type in lower case
    searchTerm = searchTerm.toLowerCase();

    // Filter the product

    /*
    this.filteredProducts = this.products().filter(
      product => product.name.toLowerCase().includes(searchTerm);
    )
    */

    // using signals
    this.filteredProducts.set(
       this.products().filter(
        product => product.name.toLowerCase().includes(searchTerm)
      )
    );
  }
}
