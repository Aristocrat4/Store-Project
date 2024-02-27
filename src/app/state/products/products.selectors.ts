import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  Product,
  ProductState,
  ProductsByCategoryState,
  SingleProductState,
} from './products.model';

export const selectProductsState =
  createFeatureSelector<ProductState>('products');

export const selectSingleProductState =
  createFeatureSelector<SingleProductState>('product');

export const selectProductsByCategoryState =
  createFeatureSelector<ProductsByCategoryState>('productsbycategory');

export const selectProducts = createSelector(
  selectProductsState,
  (state) => state
);

export const selectSingleProduct = createSelector(
  selectSingleProductState,
  (state) => state
);

export const selectProductByCategory = createSelector(
  selectProductsByCategoryState,
  (state) => state
);
