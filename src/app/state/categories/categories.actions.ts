import { createAction, props } from '@ngrx/store';

export const loadCategories = createAction('Load Categories');

export const loadCategoriesSuccess = createAction(
  'Load Categories Success',
  props<{ categories: string[] }>()
);
export const loadCategoriesFailure = createAction(
  'Load Categories Failure',
  props<{ error: unknown }>()
);
