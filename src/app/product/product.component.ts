import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // productList = [];
  // lineItemList = [];

  // productDetails = {
  //   id:"",
  //   name: "",
  //   price: 0,
  //   hsn: "",
  //   taxRate: 0,
  //   quantity: 0,
  //   totalPrice: 0
  // }

  constructor(private http: HttpClient) {
    // this.http.get("http://localhost:8080/product/productbasic/").toPromise()
    // .then(
    //   (data: [])=>{
    //     console.log(data);
    //     this.productList = data;
    //   }
    // )
  }

  ngOnInit(): void {
  }

  // onQuantityInput(){
  //   this.productDetails.totalPrice = (this.productDetails.quantity * this.productDetails.price) +
  //                     (this.productDetails.quantity * this.productDetails.price*this.productDetails.taxRate)
  // }

  // onAddItem(){
  //   if(this.productDetails.id != "" && this.productDetails.quantity != 0 && this.productDetails.totalPrice != 0){
  //     this.lineItemList.push({
  //       id: this.productDetails.id,
  //       quantity: this.productDetails.quantity,
  //       totalPrice: this.productDetails.totalPrice
  //     })
  //     console.log(this.lineItemList)
  //   }else{
  //     // alert("id : " + this.productDetails.id + "\n" +
  //     // "quantity : " + this.productDetails.quantity + "\n" +
  //     // "totalPrice : " + this.productDetails.totalPrice);
  //     alert("Please fill in the fields before proceeding further");
  //   }

  // }

  // onProductSelected(productId: String){
  //   this.http.get(`http://localhost:8080/product/${productId}`).toPromise()
  //   .then(
  //     (data: {}) =>{
  //       console.log(data);
  //       this.productDetails.id = data['id'];
  //       this.productDetails.name = data['name'];
  //       this.productDetails.price = data['price'];
  //       this.productDetails.hsn = data['hsn'];
  //       this.productDetails.taxRate = data['taxRate'];
  //     }
  //   )
  // }


}
