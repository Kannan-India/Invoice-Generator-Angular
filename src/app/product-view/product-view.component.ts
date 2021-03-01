import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/productModel';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  _producturl = "http://localhost:8080/api/products/";
  productData: Product[];


  constructor(private httpClient: HttpClient) {
    this.httpClient.get(this._producturl).subscribe((data: Product[]) => this.productData = data);
  }

  ngOnInit(): void {
  }

}
