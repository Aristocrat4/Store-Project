import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoryState } from './categories.state';

export const selectCategoryFeature =
  createFeatureSelector<CategoryState>('categories');

export const selectCategory = createSelector(
  selectCategoryFeature,
  (state) => state
);
