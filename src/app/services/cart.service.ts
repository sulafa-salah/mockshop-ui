import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { ApiRoutes } from '../models/ApiRoutes';
import { IAddCart, ICartItem  } from '../models/cart.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart! : IAddCart;
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCartByUserId(userId: number): Observable<ICartItem> {
    return this.http.get<ICartItem >(`${this.apiUrl+ ApiRoutes.Carts.getCart}/${userId}`);
  }

  add(cart : IAddCart){
   
    this.http.post(this.apiUrl+ ApiRoutes.Carts.addCart,cart).subscribe(response => {
      console.log(response);
  
    });   
  }
  
}
