import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewProductsComponent } from './new-products/new-products.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
    { path: '', component: NewProductsComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'shoppingcart', component: ShoppingCartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
