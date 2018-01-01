import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http/src/static_response';


@Injectable()
export class ProductsService {
  private _url:string = "assets/products-list.json";
  constructor(private _http:HttpClient) { }

  getProductsList() {
    return this._http.get(this._url);
  }

}
