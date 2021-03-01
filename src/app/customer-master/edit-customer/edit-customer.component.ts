import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

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
    let validDetails=true;
    //validate details
    let keys: string[] = Object.keys(this.customerDetails);
    for(let i: number = 0; i<4; i++){
      if(this.customerDetails[keys[i]] == ""){
        validDetails = false;
      }
    }
    //validate address
    let keys2: string[] = Object.keys(this.customerDetails.address);
    for(let i: number = 0; i<7; i++){
      if(this.customerDetails.address[keys2[i]] == ""){
        validDetails = false;
      }
    }

    if(this.customerDetails.id == "Id"){
      validDetails = false;
    }
    //uploading data
    if(validDetails){
      this._customerService.editCustomer(this.customerDetails).subscribe(
        (data)=>{
          console.log("Customer details updated successfully");
          console.log(data);
          alert("Customer details updated successfully");
          this.router.navigate(['/customer-master']);
        },
        error=>{
          alert(String(error));
          console.log(error);
        }
      )
    }else{
      alert("Please fill in the neccessary details before proceeding further")
    }
  }


}
