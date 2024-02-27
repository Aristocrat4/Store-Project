import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CartItem } from '../../state/cart/cart.state';
import { Store } from '@ngrx/store';
import { CartActions } from '../../state/cart/cart.actions';

@Component({
  selector: 'app-checkout-product-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './checkout-product-card.component.html',
  styleUrl: './checkout-product-card.component.scss',
})
export class CheckoutProductCardComponent {
  constructor(private store: Store) {}
  @Input() product!: CartItem;
  onRemove(id: number) {
    this.store.dispatch(
      CartActions['[CART]RemoveItemFromCart']({ itemId: id })
    );
  }
  decreaseQuantity(product: CartItem) {
    if (product.quantity > 1) {
      this.store.dispatch(
        CartActions['[CART]DecreaseItemQuantity']({
          item: product,
        })
      );
    }
  }
  increaseQuantity(product: CartItem) {
    if (product) {
      this.store.dispatch(
        CartActions['[CART]IncreaseItemQuantity']({
          item: product,
        })
      );
    }
  }
}
