import { Component } from '@angular/core';
import { Product } from "./product-list/product/products-obj";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartData:any;

  ngOnInit() {
    this.cartData = [{
      name:"Shirt 1",
      price:"19",
      imageUrl:"abc/vfd.xml"
    },{
      name:"Shirt 2",
      price:"20",
      imageUrl:"abc/vfd.xml"
    },{
      name:"Shirt 3",
      price:"21",
      imageUrl:"abc/vfd.xml"
    },{
      name:"Shirt 4",
      price:"22",
      imageUrl:"abc/vfd.xml"
    },{
      name:"Shirt 5",
      price:"23",
      imageUrl:"abc/vfd.xml"
    },{
      name:"Shirt 6",
      price:"24",
      imageUrl:"abc/vfd.xml"
    }]
  }

  onAddProductChanged(product:any):void{
    console.log(product);
  }
}
