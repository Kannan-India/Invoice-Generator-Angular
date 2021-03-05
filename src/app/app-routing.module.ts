import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PartyPageComponent } from './party-page/party-page.component';
import { PartyViewComponent } from './party-view/party-view.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { HomeComponent } from './home/home.component';
import { CustomerMasterComponent } from './customer-master/customer-master.component';
import { AddCustomerComponent } from './customer-master/add-customer/add-customer.component';
import { ViewCustomerComponent } from './customer-master/view-customer/view-customer.component';
import { EditCustomerComponent } from './customer-master/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './customer-master/delete-customer/delete-customer.component';
import { EditInvoiceComponent } from './invoice/edit-invoice/edit-invoice.component';
import { ProductMasterComponent } from './product-master/product-master.component';
import { AddProductComponent } from './product-master/add-product/add-product.component';
import { EditProductComponent } from './product-master/edit-product/edit-product.component';
import { ViewProductComponent } from './product-master/view-product/view-product.component';
import { DeleteProductComponent } from './product-master/delete-product/delete-product.component';
import { TravelRequestLineItemComponent } from './travel-request-line-item/travel-request-line-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'invoice', component: InvoiceComponent },
  { path: 'invoice-edit', component: EditInvoiceComponent },
  { path: 'customer-master', component: CustomerMasterComponent },
  { path: 'customer-add', component: AddCustomerComponent },
  { path: 'customer-view', component: ViewCustomerComponent },
  { path: 'customer-edit', component: EditCustomerComponent },
  { path: 'customer-delete', component: DeleteCustomerComponent },
  { path: 'product-master', component: ProductMasterComponent },
  { path: 'product-add', component: AddProductComponent },
  { path: 'product-view', component: ViewProductComponent },
  { path: 'product-edit', component: EditProductComponent },
  { path: 'product-delete', component: DeleteProductComponent },
  { path: 'product', component: ProductPageComponent },
  { path: 'productView', component: ProductViewComponent },
  { path: 'party', component: PartyPageComponent },
  { path: 'partyView', component: PartyViewComponent },
  { path: 'about', component: AboutComponent },
  { path: 'travel-request-line-item', component: TravelRequestLineItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
