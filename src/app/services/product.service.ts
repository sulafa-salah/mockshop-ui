import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ApiRoutes } from '../models/ApiRoutes';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = environment.apiUrl;
   // private apiUrl = 'https://dummyjson.com/products';
  
    constructor(private http: HttpClient) {}
  
    getProducts(): Observable<any> {
      return this.http.get<any>(this.apiUrl+ ApiRoutes.Product.Products);
    }
  
    // getCategories(): Observable<string[]> {
    //   return this.getProducts().pipe(
    //     map((data) => {
    //       // Extract and return unique categories
    //       const categories = data.products.map((product: any) => product.category);
    //       return [...new Set(categories)];
    //     })
    //   );
    // }
    getCategories(): Observable<string[]> {
      return this.getProducts().pipe(
        map((data: any) => {
          // Explicitly tell TypeScript that we expect an array of strings
          const categories: string[] = data.products.map((product: any) => product.category);
          return [...new Set(categories)];
        })
      );
    }
  }
