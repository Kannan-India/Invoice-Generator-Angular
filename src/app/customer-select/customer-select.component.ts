import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../customer';
import { CustomerService } from '../customer.service';
import { IInvoice } from '../Iinvoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-customer-select',
  templateUrl: './customer-select.component.html',
  styleUrls: ['./customer-select.component.css']
})
export class CustomerSelectComponent implements OnInit {

  customerList: ICustomer[] = [];

  constructor(private _customerService: CustomerService,
    private _invoiceService: InvoiceService){}

  ngOnInit(): void {

    // fetching basic customer details to display it in the select box
    this._customerService.getCustomerList()
    .subscribe(data => this.customerList = data);
  }

  onCustomerSelect(customerId: String){

    //setting customerId in customer service so that the customer details component
    //will get its details updated based on the selected customer Id
    this._customerService.setCustomerId(customerId);

    //setting customer id in the fresh invoice template in the invoice service
    this._invoiceService.invoice.customerId = customerId;

    //checking whether the invoice service is updated with the selected customerId, date and invoice No
    console.log(this._invoiceService.invoice);

  }

  //getting the selected customer id to set the selected value
  //feature is useful while using the customer select box while editing invoice
  public getSelectedCustomer(): String{
    return this._invoiceService.invoice.customerId;
  }
}
