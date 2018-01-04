import { Component, OnInit } from '@angular/core';
import { CachedResourceLoader } from '@angular/platform-browser-dynamic/src/resource_loader/resource_loader_cache';
import { Product } from "../product-list/product/products-obj";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  inputs: ['cartData']
})
export class HeaderComponent implements OnInit {
  cartData:any;
  cartOpened:boolean;

  constructor() { }

  ngOnInit() {
    this.cartOpened = false;
    console.log("cartData", this.cartData);
  }

  toggleCart():void{
    this.cartOpened = !this.cartOpened;
  }

  removeProductFromCart(product):void{
    this.cartData = this.cartData.filter(item => item !== product);
  }

  addProductToCart(product):void{
    
  }

}
