import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const SaleActions = createActionGroup({
  source: 'Cart',
  events: {
    '[CART] Get Sale And Delivery': emptyProps(),
  },
});
