import { createReducer, on } from '@ngrx/store';
import { CategoryState } from './categories.state';
import {
  loadCategories,
  loadCategoriesFailure,
  loadCategoriesSuccess,
} from './categories.actions';

export const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null,
};

export const categoryReducer = createReducer(
  initialState,
  on(loadCategories, (state) => ({ ...state, loading: true, error: null })),
  on(loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories,
    loading: false,
    error: null,
  })),
  on(loadCategoriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
