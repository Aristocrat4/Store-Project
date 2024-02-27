import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoriesService } from '../../services/categories.service';
import {
  loadCategories,
  loadCategoriesFailure,
  loadCategoriesSuccess,
} from './categories.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';

@Injectable()
export class CategoryEffects {
  constructor(
    private actions: Actions,
    private categoryService: CategoriesService
  ) {}
  loadCategories$ = createEffect(() =>
    this.actions.pipe(
      ofType(loadCategories),
      mergeMap(() =>
        this.categoryService.getAllCategories().pipe(
          map((categories) => loadCategoriesSuccess({ categories })),
          catchError((error) => of(loadCategoriesFailure({ error })))
        )
      )
    )
  );
}
