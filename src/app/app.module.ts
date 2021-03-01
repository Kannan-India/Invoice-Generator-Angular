import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InvoiceComponent } from './invoice/invoice.component';
import { CustomerSelectComponent } from './customer-select/customer-select.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerService } from './customer.service';
import { DateService } from './date.service';
import { LineItemsComponent } from './line-items/line-items.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductPageComponent } from './product-page/product-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PartyPageComponent } from './party-page/party-page.component';
import { AboutComponent } from './about/about.component';
import { PartyViewComponent } from './party-view/party-view.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { InvoiceService } from './invoice.service';
import { HomeComponent } from './home/home.component';
import { CustomerMasterComponent } from './customer-master/customer-master.component';
import { AddCustomerComponent } from './customer-master/add-customer/add-customer.component';
import { ViewCustomerComponent } from './customer-master/view-customer/view-customer.component';
import { EditCustomerComponent } from './customer-master/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './customer-master/delete-customer/delete-customer.component';
import { EditInvoiceComponent } from './invoice/edit-invoice/edit-invoice.component';
import { InvoiceSelectComponent } from './invoice-select/invoice-select.component';
import { ProductMasterComponent } from './product-master/product-master.component';
import { AddProductComponent } from './product-master/add-product/add-product.component';
import { EditProductComponent } from './product-master/edit-product/edit-product.component';
import { ViewProductComponent } from './product-master/view-product/view-product.component';
import { DeleteProductComponent } from './product-master/delete-product/delete-product.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    InvoiceComponent,
    CustomerSelectComponent,
    DatePickerComponent,
    CustomerDetailsComponent,
    LineItemsComponent,
    ProductPageComponent,
    PartyPageComponent,
    AboutComponent,
    PartyViewComponent,
    ProductViewComponent,
    HomeComponent,
    CustomerMasterComponent,
    AddCustomerComponent,
    ViewCustomerComponent,
    EditCustomerComponent,
    DeleteCustomerComponent,
    EditInvoiceComponent,
    InvoiceSelectComponent,
    ProductMasterComponent,
    AddProductComponent,
    EditProductComponent,
    ViewProductComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [CustomerService, DateService, InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
