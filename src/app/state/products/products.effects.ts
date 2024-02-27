import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from './products.actions';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) => ProductActions.loadProductssSuccess({ products })),
          catchError((error) =>
            of(ProductActions.loadProductssFailure({ error }))
          )
        )
      )
    )
  );

  loadSingleProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadSingleProduct),
      switchMap(({ id }) => {
        return this.productService.getSingleProduct(id).pipe(
          map((product) =>
            ProductActions.loadSingleProductSuccess({ product })
          ),
          catchError((error) =>
            of(ProductActions.loadSingleProductFailure({ error }))
          )
        );
      })
    );
  });

  loadProductsByCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProductsByCategory),
      mergeMap((category) =>
        this.productService.getProductsByCategory(category.category).pipe(
          map((products) =>
            ProductActions.loadProductsByCategorySuccess({
              products,
            })
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}
}
