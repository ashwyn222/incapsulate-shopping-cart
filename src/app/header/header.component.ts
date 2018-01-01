import { Component, OnInit } from '@angular/core';
import { CachedResourceLoader } from '@angular/platform-browser-dynamic/src/resource_loader/resource_loader_cache';
import { Product } from "../product-list/product/products-obj";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  inputs: ['parentData']
})
export class HeaderComponent implements OnInit {
  cartData:any;
  cartOpened:boolean;

  constructor() { }

  ngOnInit() {
    this.cartOpened = false;
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
