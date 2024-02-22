import { Injectable } from '@angular/core';
import { Actions, act, createEffect, ofType } from '@ngrx/effects';
import { CartActions } from './cart.actions';
import { Observable, of, switchMap, tap } from 'rxjs';
import { Product } from '../products/products.model';
import { CartItem } from './cart.state';
import { Store, select } from '@ngrx/store';
import { selectCartFeature } from './cart.selectors';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private store: Store) {}

  // addItemToCart$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(
  //         CartActions['[CART]AddItemToCart'],
  //         CartActions['[CART]RemoveItemFromCart']
  //       ),
  //       tap(() => {
  //         this.store.pipe(select(selectCartFeature)).subscribe((cart) => {
  //           localStorage.setItem('cart', JSON.stringify(cart));
  //         });
  //       })
  //     ),
  //   { dispatch: false }
  // );

  removeItemFromCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions['[CART]RemoveItemFromCart'])
        // tap((action) => {
        //   const { userId, itemId } = (action as any).props;
        //   const cartItems: CartItem[] = JSON.parse(
        //     localStorage.getItem('products') || '[]'
        //   );
        //   const updatedItems = cartItems.filter(
        //     (item) => item.userId !== userId
        //   );
        //   const indexToRemove = updatedItems.findIndex(
        //     (item) => item.id === itemId
        //   );
        //   if (indexToRemove !== -1) {
        //     updatedItems.splice(indexToRemove, 1);
        //   }
        //   localStorage.setItem('products', JSON.stringify(updatedItems));
        // })
      ),
    { dispatch: false }
  );
}
