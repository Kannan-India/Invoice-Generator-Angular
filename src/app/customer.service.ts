import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICustomer } from './customer';
import { throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //injecting httpservice for server side operations
  constructor(private httpClient: HttpClient){
  }

  //customerId as null to fetch data for editing customers
  private _customerId: String = "";

  //empty customerDetails object to display in the fresh invoice customer details
  private _customerDetails: ICustomer = {
    id: "Id",
    name: "Customer Name",
    phone: "Contact Number",
    email: "Email",
    gst: "GST Number",
    company: false,
    address: {
      doorNo: "Door No",
      street: "Street",
      area: "Area",
      city: "City",
      state: "State",
      country: "Country",
      pincode: "Pincode"
    }
  };

  //addcustomer
  public addCustomer(customer: ICustomer): Observable<ICustomer>{
    return this.httpClient.post<ICustomer>("http://localhost:8080/customer/", customer)
    .pipe(catchError(this.errorHandler))
  }

  //editcustomer
  public editCustomer(customer: ICustomer): Observable<ICustomer>{
    return this.httpClient.put<ICustomer>("http://localhost:8080/customer/", customer)
    .pipe(catchError(this.errorHandler))
  }

  //deletecustomer
  public deleteCustomer(customerId: String): Observable<Object>{
    return this.httpClient.delete<Object>("http://localhost:8080/customer/"+ customerId)
    .pipe(catchError(this.errorHandler))
  }

  //errorhandler
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || 'server Error');
  }

  //Subject to check asynchronously for change in _customerDetails
  public customerDetailsChange: Subject<ICustomer> = new Subject<ICustomer>();

  //fetching customerDetails based on the provided id
  public setCustomerId(customerId: String){
    this._customerId = customerId;

    this.fetchCustomerDetails().subscribe(data=>{
      this.customerDetailsChange.next(data);
    });
  }

  //getCustomerId
  public getCustomerId(): String{
    return this._customerId;
  }

  //getCustomerDetails()
  public getCustomerDetails(){
    return this._customerDetails;
  }

  public setCustomerDetails(customerDetails: ICustomer){
    this._customerDetails = customerDetails;
  }

  public getCustomerList(): Observable<ICustomer[]>{
    return this.httpClient.get<ICustomer[]>("http://localhost:8080/customer/customerbasic/");
  }

  public fetchCustomerDetails(): Observable<ICustomer>{
    return this.httpClient.get<ICustomer>(`http://localhost:8080/customer/${this._customerId}`);
  }

  public getCustomerDetailsForViewAll(): Observable<ICustomer[]>{
    return this.httpClient.get<ICustomer[]>("http://localhost:8080/customer/viewall/")
    .pipe(catchError(this.errorHandler));
  }

}
