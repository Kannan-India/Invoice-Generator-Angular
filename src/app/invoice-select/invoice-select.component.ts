import { Component, OnInit } from '@angular/core';
import { IInvoice } from '../Iinvoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-select',
  templateUrl: './invoice-select.component.html',
  styleUrls: ['./invoice-select.component.css']
})
export class InvoiceSelectComponent implements OnInit {

  invoiceList: IInvoice[];

  constructor(private _invoiceService : InvoiceService) { }

  ngOnInit(): void {
    this._invoiceService.getInvoiceList().subscribe(
      (data: IInvoice[])=>{
        this.invoiceList = data;
      },
      (error)=>{
        console.log(error);
        alert(String(error))
      }
    )
  }

  onChange(invoiceNo: string){
    this._invoiceService.setInvoiceDetailsForEdit(invoiceNo);
  }

  onEdit(){

  }

}
