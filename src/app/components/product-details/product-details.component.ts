import { Component, Input, Output,EventEmitter } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
@Input() product! : IProduct;
@Output() buy =new EventEmitter()

buyButtonClicked(product : IProduct){
  this.buy.emit();

}
getDiscountedClasses(product : IProduct)
{
  if(product.discountPercentage > 1) return ['strikethrough'];
  else return [];
  
}
}
