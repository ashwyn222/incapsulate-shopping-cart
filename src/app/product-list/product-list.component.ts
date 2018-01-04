import { Component, OnInit, Output } from '@angular/core';
import { Product } from "./product/products-obj";
import { EventEmitter } from '@angular/core';
import { ProductsService } from "./products.service";
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  outputs: ['productAddedEvent']
})
export class ProductListComponent implements OnInit {
  @Output()
  public productAddedEvent = new EventEmitter<any>();
  productData:any;

  constructor(private _productsService:ProductsService) { }

  ngOnInit() {
    this._productsService.getProductsList()
      .subscribe(resProductData => this.productData = resProductData);
  }

  addProductToCart(product:any):void{
    this.productAddedEvent.emit(product);
    console.log(product);
  }

  onScroll($event: Event): void {
    
  }
}
