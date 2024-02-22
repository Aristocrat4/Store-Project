import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartItem } from './cart.state';

export const selectCartFeature = createFeatureSelector<CartItem[]>('cart');

export const selectUserCart = createSelector(
  selectCartFeature,
  (state) => state
);
