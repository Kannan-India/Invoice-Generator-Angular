import { Component, OnInit } from '@angular/core';
import { IInvoice } from '../Iinvoice';
import { InvoiceService } from '../invoice.service';
import { IProduct } from '../Iproduct';
import { ILineItem } from '../lineItem';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-line-items',
  templateUrl: './line-items.component.html',
  styleUrls: ['./line-items.component.css']
})
export class LineItemsComponent implements OnInit {

  productList: IProduct[];
  lineItemsListLocal: ILineItem[] = [];
  selectedProductDetails: IProduct = {
    id: "",
    name: "",
    price: 0,
    hsn: "",
    taxRate: 0
  };
  quantity: number;
  totalPrice: number;

  constructor(
    private _invoiceService: InvoiceService,
    private _productService: ProductService
    ) {}

  ngOnInit(): void {
    //pass the invoice number here to edit an existing invoice
    // this._invoiceService.getInvoiceById("166xfg")
    // .subscribe(
    //   data=> {
    //     if(data != null){
    //       // this.lineItems = data.lineItems
    //       this.isFreshInvoice = false;
    //     }
    //   }
    // )

    //subscribing to fetch the product list to display it in the product select box
    this._productService.getProductList().
    subscribe(
      data=>this.productList= data
    )
  }

  // lineItems: ILineItem[] = [];
  // isFreshInvoice: boolean = true;
  // duplicateLineItemsListLocal: ILineItem[] = [];

  //check whether the invoice is fresh ie., any line items has been added or not
  //used to display the first row for fresh line item addition
  public isFreshInvoice(): boolean{
    return this._invoiceService.invoice.lineItems.length == 0;
  }

  //when product is selected on the fresh line addition
  onProductChange(id: String){

    //subscribing to fetch the selected product details
    this._productService.getProductDetailsById(id)
    .subscribe(
      data => {
        this.selectedProductDetails = data;

        //validating and updating total price on consequent product selection change
        if(this.quantity != 0 && this.quantity!= undefined && this.quantity != null){
          let cost = this.quantity * this.selectedProductDetails.price;
          this.totalPrice = cost + cost*this.selectedProductDetails.taxRate;
        }
      }
    )
  }

  //on quantity input in fresh line addition updating the total price
  onQuantityChange(){
    let cost = this.quantity * this.selectedProductDetails.price;
    this.totalPrice = cost + cost*this.selectedProductDetails.taxRate;
  }

  //on fresh line item add
  onFreshAdd(){

    //validating
    if((this.selectedProductDetails.id != '')
     && (this.quantity != 0 && this.quantity != undefined && this.quantity != null)
     && (this.totalPrice != 0 && this.totalPrice != undefined && this.totalPrice != null)){

      //pushing direct template object to the fresh template invoice's line item array in the invoice service
      this._invoiceService.invoice.lineItems.push(
        {
          productId: this.selectedProductDetails.id,
          quantity: this.quantity,
          price: this.selectedProductDetails.price,
          taxRate: this.selectedProductDetails.taxRate,
          totalPrice: this.totalPrice
        }
      )

      //refreshing local details to make it fresh for consequent line item additions
      this.refreshLocalDetails()
    }else{
      alert("Please fill in the fields before proceeding further")
    }
  }

  refreshLocalDetails(){
    this.selectedProductDetails = {
      id: "",
      name: "",
      price: 0,
      hsn: "",
      taxRate: 0
    };
    this.quantity = undefined;
    this.totalPrice = undefined;
  }

  //TODO:
  //instead of this subjects can be added to subscribe to the changes in the lineitems[]
  //of invoice template in the invoice service
  public getLineItems(): ILineItem[]{
    return this._invoiceService.invoice.lineItems;
  }

  //delete line item from the invoice template
  deleteItem(i: number){
    if(confirm("Are you sure?")){
      this._invoiceService.invoice.lineItems.splice(i, 1);
    }
  }

  //update product changes in a line item to the invoice template based on index & new productId
  updateChanges(index: number, id: String){
    this._productService.getProductDetailsById(id)
    .subscribe(
      data => {

        // setting the new id, price, tax rate and total price
        this._invoiceService.invoice.lineItems[index].productId = id;
        this._invoiceService.invoice.lineItems[index].price = data.price;
        this._invoiceService.invoice.lineItems[index].taxRate = data.taxRate;

        let cost = this._invoiceService.invoice.lineItems[index].quantity * data.price;
        this._invoiceService.invoice.lineItems[index].totalPrice = cost + (cost * data.taxRate);

      }
    )
  }

  //calculating total amount - direct function call from template everytime to
  //recognize changes
  getTotalAmount(): Number{
    let totalAmount=0;
    this.getLineItems().forEach(item => {
      totalAmount += item.totalPrice;
    });
    return totalAmount;
  }

  //when quantity of existing line item gets updated
  //setting the new quantity and total price for that line item
  onQuantityUpdate(index: number, quantity: number){
    this._invoiceService.invoice.lineItems[index].quantity = quantity;
    let cost = quantity * this._invoiceService.invoice.lineItems[index].price;
    this._invoiceService.invoice.lineItems[index].totalPrice =
      cost + (cost * this._invoiceService.invoice.lineItems[index].taxRate);
  }

  //when totalprice of existing line item gets updated
  onTotalPriceUpdate(index: number, totalPrice: number){
    this._invoiceService.invoice.lineItems[index].totalPrice = totalPrice;
  }

}
