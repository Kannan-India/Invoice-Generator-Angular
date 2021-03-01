import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  customerDetails: ICustomer;

  constructor(private _customerService: CustomerService) {
    this.customerDetails = _customerService.getCustomerDetails();
    this._customerService.customerDetailsChange.subscribe((value)=>{
      // this._customerService.setCustomerDetails(value);
      this.customerDetails = value;
    })
   }

  ngOnInit(): void {
    // this._customerService.getCustomerDetailsForViewAll().subscribe(
    //   (data: ICustomer[])=>{
    //     this.customerList = data;
    //     console.log(data);

    //   },
    //   error=>{
    //     alert(String(error));
    //     console.log(error);
    //   }
    // )
  }



}
