import { Component, OnInit } from '@angular/core';
import { Batch } from './modal/batch';
import { Mtransactionform } from './modal/mtransactionform';

@Component({
  selector: 'app-travel-request-line-item',
  templateUrl: './travel-request-line-item.component.html',
  styleUrls: ['./travel-request-line-item.component.css']
})
export class TravelRequestLineItemComponent implements OnInit {

  public mtransactionform: Mtransactionform = new Mtransactionform();
  public lineItem: Batch = new Batch();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    if(this.lineItem.travNum !=null && this.lineItem.travelrequestno != null && this.lineItem.travelrequestdate != ""
    && this.lineItem.travelstartdate != "" && this.lineItem.travelenddate !=""){
      this.mtransactionform.lineItems.push(this.lineItem);
      this.lineItem = new Batch();
      console.log(this.mtransactionform);

    }else{
      alert("Please fill in all the details")
    }
  }

  deleteItem(index: number){
    this.mtransactionform.lineItems.splice(index, 1);
  }
}
