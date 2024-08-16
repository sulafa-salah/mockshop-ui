import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product.model';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: IProduct[] = [];
  filteredProducts: any[] = [];
  categories: string[] = [];
  selectedCategory: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Fetch products
    this.productService.getProducts().subscribe((data) => {
      this.products = data.products;
      this.filteredProducts = this.products; // Initially show all products
    });

    // Fetch categories
    this.productService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  filterByCategory() {
   return this.selectedCategory ==='' 
   ?this.products
   : this.products.filter(product => product.category === this.selectedCategory);
  
  }
}