import { Category } from "../enums/category.enum";

export interface IProduct {
    id:                   number;
    title:                string;
    description:          string;
    category:             Category;
    price:                number;
    discountPercentage:   number;
    rating:               number;
    stock:                number;
    tags:                 string[];
    brand?:               string;
    sku:                  string;
    weight:               number;  
    warrantyInformation:  string;
    shippingInformation:  string; 
    minimumOrderQuantity: number;  
    images:               string[];
    thumbnail:            string;
}