import { createActionGroup, props } from '@ngrx/store';
import { CartItem } from './cart.state';

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    '[CART] Get Cart': props<{ userId: number }>(),
    '[CART] Add Item to Cart': props<{ item: CartItem }>(),
    '[CART] Increase Item Quantity': props<{ item: CartItem }>(),
    '[CART] Decrease Item Quantity': props<{ item: CartItem }>(),
    '[CART] Remove Item from Cart': props<{ itemId: number }>(),
  },
});
