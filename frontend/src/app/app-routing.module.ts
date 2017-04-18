import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewProductsComponent } from './new-products/new-products.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
    { path: '', component: NewProductsComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
