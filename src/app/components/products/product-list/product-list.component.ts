import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../../models/product.model';
import { CartService } from '../../../services/cart.service';
import { IAddCart, ICart } from '../../../models/cart.model';
import { ProductDetailsComponent } from '../product-details/product-details.component';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  cart : IProduct[]=[];

  constructor(private productSvc: ProductService, private cartSvc : CartService) {}

  ngOnInit() {
    // Fetch products
    this.productSvc.getProducts().subscribe((data) => {
      this.products = data.products;
      this.filteredProducts = this.products; // Initially show all products
    });

    // Fetch categories
    this.productSvc.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
// getDiscountedClasses(product : IProduct)
// {
//   return {strikethrough : product.discountPercentage > 1};
// }


addToCart(product : IProduct){
  const cart: IAddCart = {
    userId: 1, // This could be dynamic depending on your application logic
    products: [
      { id: product.id, quantity: 1 } // adding one product at a time
    ]
  };
this.cartSvc.add(cart);
}
  filterByCategory() {
   return this.selectedCategory ==='' 
   ?this.products
   : this.products.filter(product => product.category === this.selectedCategory);
  
  }
}