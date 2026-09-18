import { Routes } from '@angular/router';
import { ProductList } from './product/product-list/product-list';
import { CartView } from './cart/cart-view/cart-view';

export const routes: Routes = [
    {path: "", redirectTo: "/products", pathMatch: "full"},
    {path: "products", component: ProductList},
    {path: "cart", component: CartView}
];
