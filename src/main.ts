import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ErrorHandler, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './app/state/products/products.effects';
import {
  productReducer,
  productsByCategoryReducer,
  singleProductReducer,
} from './app/state/products/products.reducer';
import { cartReducer } from './app/state/cart/cart.reducer';
import { saleReducer } from './app/state/sale/sale.reducer';
import { categoryReducer } from './app/state/categories/categories.reducer';
import { CategoryEffects } from './app/state/categories/categories.effects';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      RouterModule.forRoot(routes),
      StoreModule.forRoot({
        cart: cartReducer,
        sale: saleReducer,
        products: productReducer,
        product: singleProductReducer,
        categories: categoryReducer,
        productsbycategory: productsByCategoryReducer,
      }),
      StoreRouterConnectingModule.forRoot(),
      StoreDevtoolsModule.instrument(),
      EffectsModule.forRoot([ProductsEffects, CategoryEffects])
    ),
  ],
});
