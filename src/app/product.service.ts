import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct } from './Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {}

  public getProductList(): Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>("http://localhost:8080/product/");
  }

  public getProductDetailsById(id: String): Observable<IProduct>{
    return this.httpClient.get<IProduct>(`http://localhost:8080/product/${id}`);
  }

  public addProduct(product: IProduct): Observable<any>{
    let HTTPOptions:Object = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      }),
      responseType: 'text'
   }
    return this.httpClient.post<any>("http://localhost:8080/product/", product, HTTPOptions)
    .pipe(catchError(this.errorHandler));
  }

  public errorHandler(error: HttpErrorResponse){
    return throwError(error.message || 'server Error');
  }
}
