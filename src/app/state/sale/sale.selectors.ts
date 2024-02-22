import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Sale } from './sale.state';

export const selectSaleFeature = createFeatureSelector<Sale>('sale');

export const selectSale = createSelector(selectSaleFeature, (state) => state);
