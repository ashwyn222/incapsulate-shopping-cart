import { Component, OnInit, Output } from '@angular/core';
import { Product } from "../product-list/products-obj";
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
  pagination:any;

  constructor(private _productsService:ProductsService) { }

  ngOnInit() {
    this.pagination = {
      from:1,
      to:20,
      total:1000,
      size:12,
      currentPage:1
    };

    this._productsService.getProductsList()
      .subscribe(resProductData => this.productData = resProductData);
  }

  addProductToCart(product:Product):void{
    this.productAddedEvent.emit(product);
  }

  onScroll($event: Event): void {
    var o = document.getElementById("products-section");
    if(o.offsetHeight + o.scrollTop > o.scrollHeight-200){
      if(this.pagination.to <= this.pagination.total){
        var from = this.pagination.to + 1;
        var to = this.pagination.to + this.pagination.size;
        to = (to > this.pagination.total) ? this.pagination.total : to;
        this.pagination.to = to;
      } else {
        console.log("All products listed");
      }
        
    }
  }
}
