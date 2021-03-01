import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  public customerDetails: ICustomer = {
    id: null,
    name: "",
    phone: "",
    email: "",
    gst: "",
    company: false,
    address: {
      doorNo: "",
      street: "",
      area: "",
      city: "",
      state: "",
      country: "India",
      pincode: ""
    }
  };

  constructor(private _customerService: CustomerService, private router: Router) {
    this.customerDetails = _customerService.getCustomerDetails();
    this._customerService.customerDetailsChange.subscribe((value)=>{
      // this._customerService.setCustomerDetails(value);
      this.customerDetails = value;
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.customerDetails);
    if(this.customerDetails.id !="" && this.customerDetails.id!="Id"){
      if(confirm("Are you sure?")){
        //deleting data
        this._customerService.deleteCustomer(this.customerDetails.id).subscribe(
          (data)=>{
            console.log("Customer deleted successfully");
            console.log(data);
            alert("Customer deleted successfully");
            this.router.navigate(['/customer-master']);
          },
          error=>{
            alert(String(error));
            console.log(error);
          }
        )
      }
    }else{
      alert("Please select the customer to delete!")
    }
  }

}
