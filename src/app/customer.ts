import { IAddress } from "./address";

export interface ICustomer{
  id: String,
  name: String,
  phone: String,
  email: String,
  gst: String,
  address: IAddress,
  company: boolean
}
