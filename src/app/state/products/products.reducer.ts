import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './products.actions';
import { Product, ProductState, SingleProductState } from './products.model';

export const productsFeatureKey = 'products';

export interface State {}

export const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const initialSinglePageState: SingleProductState = {
  product: null,
  loading: false,
  error: null,
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(ProductActions.loadProductssSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
    error: null,
  })),
  on(ProductActions.loadProductssFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export const singleProductReducer = createReducer(
  initialSinglePageState,
  on(ProductActions.loadSingleProduct, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductActions.loadSingleProductSuccess, (state, { product }) => ({
    ...state,
    product,
    loading: false,
    error: null,
  })),
  on(ProductActions.loadSingleProductFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
