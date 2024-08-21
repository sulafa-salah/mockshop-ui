

export interface IAddCart {
    userId: number;
    products: ICommonProduct[];
  }
  export interface ICommonProduct {
    id:  number;
    quantity: number;
  }
  export interface ICartItem  {
    carts: ICart[];
    total: number;
    skip:  number;
    limit: number;
}
  export interface ICart {
    id: number;
    userId: number;
    products: ICartProduct[];
    total: number;
    discountedTotal: number;
    totalProducts: number;
    totalQuantity: number;
}



export interface ICartProduct extends ICommonProduct {
   
    title:              string;
    price:              number;  
    total:              number;
    discountPercentage: number;
    discountedTotal:    number;
    thumbnail:          string;
}
