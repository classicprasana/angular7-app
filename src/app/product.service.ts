import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts()
  {
    return [
  
      {
         "id":4535,
         "name":"watch",
         "brand":"fossil",
         "price":6000,
       },
  
       {
        "id":6544,
        "name":"shirt",
        "brand":"reymond",
        "price":3000,
      },
  
      {
        "id":1111,
        "name":"mobile",
        "brand":"redmi",
        "price":11000,
      },
  
      {
        "id":2222,
        "name":"bike",
        "brand":"honda",
        "price":100000,
      }
  
       
        ];
  }

  constructor() { }
}
