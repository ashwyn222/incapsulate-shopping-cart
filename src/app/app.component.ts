import { Component } from '@angular/core';
import { Product } from "./product-list/products-obj";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cartData:Product[];

  ngOnInit() {
    this.cartData = [];
  }

  updateCart(product:Product){
    var cd = this.cartData;
    
    if(cd.length == 0){
      cd.push(product);
    } else {
      var duplicateProduct = this.checkDuplicateProduct(cd, product);
      
      if(!duplicateProduct){
        cd.push(product);
      }
    }
  }

  private checkDuplicateProduct(cd, p):boolean {
    var duplicate = false;
    cd.forEach(function(element){
      if(element._id === p._id){
        duplicate = true;
      }
    });
    return duplicate;
  }
}
