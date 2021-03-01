import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private _customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

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

  onSubmit(){
    console.log(this.customerDetails);
    let validDetails=true;
    //validate details
    let keys: string[] = Object.keys(this.customerDetails);
    for(let i: number = 1; i<4; i++){
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
    //uploading data
    if(validDetails){
      this._customerService.addCustomer(this.customerDetails).subscribe(
        (data)=>{
          console.log("Uploaded Successfully");
          console.log(data);
          alert("Uploaded Successfully");
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
