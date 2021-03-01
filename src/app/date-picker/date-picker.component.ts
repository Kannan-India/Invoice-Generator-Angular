import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  // this will get used if date component is purely seperated
  // for now it is being used to directly set the date in the invoice service
  date: String = new Date().toISOString().slice(0, 10);

  constructor(private _dateService: DateService,
    private _invoiceService: InvoiceService) { }

  ngOnInit(): void {
  }

  onDateInput(){
    //not useful for now
    this._dateService.date = this.date;

    //updating the date with the selected date
    this._invoiceService.invoice.date = this.date;
  }

  //useful while editing the invoice to display the selected date
  public getSelectedDate(): String{
    return this._invoiceService.invoice.date;
  }

}
