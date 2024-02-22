import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import {
  Product,
  SingleProductState,
} from '../../state/products/products.model';
import { Observable, take } from 'rxjs';
import { selectSingleProduct } from '../../state/products/products.selectors';
import { loadSingleProduct } from '../../state/products/products.actions';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CartActions } from '../../state/cart/cart.actions';
import { CartItem } from '../../state/cart/cart.state';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatProgressSpinnerModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<SingleProductState> =
    this.store.select(selectSingleProduct);
  id: number = 0;
  quantity: number = 1;
  private destroyRef = inject(DestroyRef);
  constructor(private store: Store, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params
      .pipe(take(1))
      .subscribe((param) => (this.id = param['id']));
    const url = 'product/' + this.id;
    this.store.dispatch(loadSingleProduct({ id: this.id }));
  }
  addToCart(product: CartItem) {
    if (product) {
      const createuserId = Math.random() * 100;
      console.log(product);
      this.store.dispatch(
        CartActions['[CART]AddItemToCart']({
          item: { ...product, quantity: this.quantity },
        })
      );
    }
  }
  increaseQuantity() {
    this.quantity++;
  }
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
