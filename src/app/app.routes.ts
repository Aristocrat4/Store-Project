import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'product', component: ProductDetailsComponent },
];
