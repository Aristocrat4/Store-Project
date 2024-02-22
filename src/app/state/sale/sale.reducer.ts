import { createReducer, on } from '@ngrx/store';
import { initialSaleState } from './sale.state';
import { SaleActions } from './sale.actions';

export const saleReducer = createReducer(
  initialSaleState,
  on(SaleActions['[CART]GetSaleAndDelivery'], (state) => state)
);
