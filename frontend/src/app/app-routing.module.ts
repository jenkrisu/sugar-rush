import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ContactInformationComponent } from './shopping-cart/contact-information.component';
import { ShippingComponent } from './shopping-cart/shipping.component';
import { PaymentComponent } from './shopping-cart/payment.component';
import { ConfirmationComponent } from './shopping-cart/confirmation.component';
import { SuccessComponent } from './shopping-cart/success.component';

import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'shoppingcart', component: ShoppingCartComponent },
    { path: 'shoppingcart/contactinfo', component: ContactInformationComponent },
    { path: 'shoppingcart/shipping', component: ShippingComponent },
    { path: 'shoppingcart/confirmation', component: ConfirmationComponent },
    { path: 'shoppingcart/payment', component: PaymentComponent },
    { path: 'shoppingcart/success', component: SuccessComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
