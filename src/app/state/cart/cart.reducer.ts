import { createReducer, on } from '@ngrx/store';
import { CartActions } from './cart.actions';
import { CartItem, initialCartState } from './cart.state';

export const cartFeatureKey = 'cart';

export const cartReducer = createReducer(
  initialCartState,
  on(CartActions['[CART]AddItemToCart'], (state, { item }) => {
    // Check if the item already exists in the cart
    const existingItemIndex = state.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // If the item exists, create a new state array with the updated item
      return state.map((cartItem, index) => {
        if (index === existingItemIndex) {
          // Increment the quantity of the existing item
          return {
            ...cartItem,
            quantity: (cartItem.quantity || 1) + item.quantity, // Use existing quantity, default to 1 if not set, then add 1
          };
        }
        return cartItem; // Return all other items unchanged
      });
    } else {
      // If the item doesn't exist, add it to the cart with a quantity of 1
      return [
        ...state,
        { ...item, quantity: item.quantity }, // Add a new item with quantity initialized to 1
      ];
    }
  }),
  on(CartActions['[CART]RemoveItemFromCart'], (state, { itemId }) =>
    state.filter((item) => item.id !== itemId)
  )
);
