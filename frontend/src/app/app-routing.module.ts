import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './shopping-cart/contact-information.component';

import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'shoppingcart', component: ShoppingCartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'register', component: RegistrationComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
