import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CheckoutProductCardComponent } from '../../ui/checkout-product-card/checkout-product-card.component';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { selectUserCart } from '../../state/cart/cart.selectors';
import { map, switchMap, tap } from 'rxjs';
import { selectSale } from '../../state/sale/sale.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, CheckoutProductCardComponent, MatIconModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  constructor(private store: Store, private router: Router) {}
  cart$ = this.store.select(selectUserCart);
  calculateOriginalPrice$ = this.cart$.pipe(
    map((products) =>
      products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    ),
    map((sum) => parseFloat(sum.toFixed(2)))
  );
  saleAndDelivery$ = this.store.select(selectSale).pipe(
    map((sale) => {
      return {
        sale: sale.sale.toFixed(2),
        delivery: sale.delivery ? sale.delivery : 'free',
      };
    })
  );
  calculateTotalPrice$ = this.calculateOriginalPrice$.pipe(
    switchMap((price) => {
      return this.saleAndDelivery$.pipe(
        map((product) => {
          return {
            sale: product.sale,
            delivery: product.delivery === 'free' ? 0 : product.delivery,
          };
        }),
        map(
          (product) => price - Number(product.delivery) - Number(product.sale)
        ),
        map((total) => (total < 0 ? 0 : total))
      );
    })
  );
  onGetStarted() {
    this.router.navigate(['']);
  }
}
