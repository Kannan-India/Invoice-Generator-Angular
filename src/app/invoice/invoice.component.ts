import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private _invoiceService : InvoiceService) { }

  ngOnInit(): void {
  }

  onSave(){
    if(this._invoiceService.saveInvoice() == "0"){
      alert("Please Complete the bill before saving")
    }else{
      alert("Invoice saved successfully")
    }
  }

}
