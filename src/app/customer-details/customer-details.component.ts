import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../customer';
import { CustomerService } from '../customer.service';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  //will get fetched from customer service
  //values are either empty customer template / the details of the selected customer
  customerDetails: ICustomer;

  constructor(private _customerService: CustomerService, private _invoiceService: InvoiceService) {

    //fetching the customer details initially
    this.customerDetails = _customerService.getCustomerDetails();

    //subscribing to the changes on the customer details and updating it
    this._customerService.customerDetailsChange.subscribe((value)=>{
      this.customerDetails = value;
    })
  }

  ngOnInit(): void {
  }

  // serviceVariable = this.getServiceVariable();

  // public isFreshInvoice(): boolean{
  //   return this._invoiceService.invoice.lineItems.length == 0;
  // }

  // public getServiceVariable(): String{
  //   return this._customerService.getCustomerId();
  // }

  // get getSelectedCustomerId(): String {
  //   return this.customerService.getSelectedCustomerId();
  // }

  // get customerDetails(): any{
  //   return this.customerService.cDetails();
  // }

}
