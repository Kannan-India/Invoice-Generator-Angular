import { ILineItem } from "./lineItem";

export interface IInvoice{
  invoiceNo: String,
  date: String,
  customerId: String,
  lineItems: ILineItem[]
}
