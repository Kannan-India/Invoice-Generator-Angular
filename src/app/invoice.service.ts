import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CustomerService } from './customer.service';
import { IInvoice } from './Iinvoice';
import { Router, NavigationEnd } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  //empty invoice to be used by fresh invoice
  public invoice: IInvoice = {
    invoiceNo: String(Date.now()),
    date: new Date().toISOString().slice(0, 10),
    customerId: "",
    lineItems: []
  };
  // 60338603d304815297effd47
  //6033930ed304815297effd48

  constructor(private httpClient: HttpClient, private _customerService : CustomerService,
    private router: Router) {

    //subscribing to any router change events to nullify the customerId if its selected
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.invoice.customerId = "";
      }
    });
  }

  //return smtg to handle ay error
  public setInvoiceDetailsForEdit(invNo: string){
    // this.httpClient.get("http://localhost:8080/invoice/6033930ed304815297effd4")
    // .toPromise().then(
    //   (data: IInvoice) => {
    //     if(data != null){
    //       this.invoice = data;
    //       this._customerService.setCustomerId(data.customerId);
    //     }
    //   }
    // )
    this.httpClient.get("http://localhost:8080/invoice/" + invNo)
    .pipe(catchError(this.errorHandler)).subscribe(
      (data: IInvoice)=>{
        if(data != null){
          this.invoice = data;
          this._customerService.setCustomerId(data.customerId);
        }
      },
      (error)=>{
        console.log("Error while retrieving invoice for editing")
        console.log(error);

      }
    )
  }

  public getInvoiceById(id: String): Observable<IInvoice>{
    return this.httpClient.get<IInvoice>("http://localhost:8080/invoice/" + id)
  }

  public getInvoiceList(): Observable<IInvoice[]>{
    return this.httpClient.get<IInvoice[]>("http://localhost:8080/invoice/basic/")
    .pipe(catchError(this.errorHandler));
  }

  public errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

  public saveInvoice(): String{
    console.log(this.invoice)
    if(this.invoice.customerId != "" && this.invoice.date != "" && this.invoice.customerId != ""
    && this.invoice.lineItems.length != 0 ){
      this.httpClient.post("http://localhost:8080/invoice/", this.invoice)
      .toPromise().then(
        (data)=>{
          console.log("Posted Successfully")
          console.log(data)
          return 1;
        }
      )
    }else{
      return "0";
    }
  }

}
