import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Iproduct';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productDetails: IProduct = {
    id: null,
    name: "",
    price: 0,
    hsn: "",
    taxRate: 0
  };
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.productDetails.name != "" && this.productDetails.hsn != "" &&
    this.productDetails.price!=0 && this.productDetails.price != null && this.productDetails.price != undefined &&
    this.productDetails.taxRate!=0 && this.productDetails.taxRate != null && this.productDetails.taxRate != undefined )
    {
        this._productService.addProduct(this.productDetails)
        .subscribe(
          (data) => alert(data),
          (error)=> {
            alert(error),
            console.log(error)
          }
        )
    }else{
      alert("please fill in the details before proceeding further")
    }
  }

}
