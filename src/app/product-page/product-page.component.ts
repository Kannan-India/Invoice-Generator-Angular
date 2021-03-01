import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../model/productModel';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  productValue = new Product;
  productPostUrl = 'http://localhost:8080/product/';

  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }


  addProductForm = this.fb.group({
    itemName: [''],
    itemType: [''],
    salesPrice: [''],
    purchasePrice: [''],
    hsn: [''],
    gst: ['']
  });

  onSubmit(form) {
    this.productValue.id = null;
    this.productValue.itemName = form.value.itemName;
    this.productValue.itemType = form.value.itemType;
    this.productValue.salesPrice = form.value.salesPrice;
    this.productValue.purchasePrice = form.value.purchasePrice;
    this.productValue.hsn = form.value.hsn;
    this.productValue.gst = form.value.gst;
    console.log(this.productValue);

    this.httpClient.post(this.productPostUrl, this.productValue).subscribe(
      response => console.log('Success!', response),
      error => console.log('Error', error)
    );
  }

  ngOnInit(): void {
  }

}
