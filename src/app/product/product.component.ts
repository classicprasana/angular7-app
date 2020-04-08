import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any
// this one for  ng service and depedency injection , need to inject the service for accessing the the sevice from custom component
  constructor(private service:ProductService) {
    
    //this.products = service.getProducts();
    
    // this  below lines for ngfor 
  // this.products=[

  //   {
  //      "id":4535,
  //      "name":"watch",
  //      "brand":"fossil",
  //      "price":6000,
  //    },

  //    {
  //     "id":6544,
  //     "name":"shirt",
  //     "brand":"reymond",
  //     "price":3000,
  //   },

  //   {
  //     "id":1111,
  //     "name":"mobile",
  //     "brand":"redmi",
  //     "price":11000,
  //   },

  //   {
  //     "id":2222,
  //     "name":"bike",
  //     "brand":"honda",
  //     "price":100000,
  //   }

     
  //     ]

   }

  ngOnInit(): void {
     
    this.products = this.service.getProducts();
  }

}




