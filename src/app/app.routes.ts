import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { authGuard } from './guards/auth.guard';



export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    
    { path: 'products', component: ProductListComponent }, // Route for product list
  { path: 'product/:id', component: ProductDetailsComponent }, // Route for product details by ID
    { path: 'cart',
      canActivate : [authGuard]
      ,component: CartComponent },
    { path: 'sign-in', component: SignInComponent },
   

];
