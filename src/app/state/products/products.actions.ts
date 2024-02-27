import { createAction, props } from '@ngrx/store';
import { Product } from './products.model';

export const loadProducts = createAction('Load Productss');
export const loadProductssSuccess = createAction(
  'Load Productss Success',
  props<{ products: Product[] }>()
);
export const loadProductssFailure = createAction(
  'Load Productss Failure',
  props<{ error: unknown }>()
);
export const loadSingleProduct = createAction(
  'Load Single Product',
  props<{ id: number }>()
);
export const loadSingleProductSuccess = createAction(
  'Load Single Product Success',
  props<{ product: Product }>()
);
export const loadSingleProductFailure = createAction(
  'Load Single Product Failure',
  props<{ error: unknown }>()
);
export const loadProductsByCategory = createAction(
  'Load Products By Category',
  props<{ category: string }>()
);
export const loadProductsByCategorySuccess = createAction(
  'Load Products By Category Success',
  props<{ products: Product[] }>()
);
export const loadProductsByCategoryFailure = createAction(
  'Load Products By Category Failure',
  props<{ error: unknown }>()
);
