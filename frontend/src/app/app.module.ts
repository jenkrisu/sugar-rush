import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ContactInformationComponent } from './shopping-cart/contact-information.component';
import { ShippingComponent } from './shopping-cart/shipping.component';
import { PaymentComponent } from './shopping-cart/payment.component';
import { ConfirmationComponent } from './shopping-cart/confirmation.component';
import { SuccessComponent } from './shopping-cart/success.component';

import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';

import { ProductService } from './shared/product.service';
import { ShoppingCartService } from './shared/shopping-cart.service';
import { LoginService } from './shared/login.service';



@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductListComponent,
    HomePageComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    ContactInformationComponent,
    AddProductComponent,
    AdminComponent,
    RegistrationComponent,
    PaymentComponent,
    ConfirmationComponent,
    ShippingComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    ShoppingCartService,
    LoginService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
