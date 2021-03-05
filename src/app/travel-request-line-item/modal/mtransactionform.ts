import { Batch } from "./batch";

export class Mtransactionform{
  id: string;
  lineItems: Batch[];

  constructor(){
    this.id=null;
    this.lineItems = [];
  }
}
