import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ICart, ICartProduct } from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  
   cartItems: ICartProduct[] = [];
   total: number = 0;
  constructor(private cartSvc: CartService) { }

  ngOnInit() {
   
      this.cartSvc.getCartByUserId(59).subscribe((carts) => {
        if (carts.carts.length > 0) {
          const cart = carts.carts[0]; // Assuming you want the first cart
          this.cartItems = cart.products;
          this.total = cart.discountedTotal;
        } 
      });
    
  }


 

 


}
