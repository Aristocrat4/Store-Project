import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CheckoutProductCardComponent } from '../../ui/checkout-product-card/checkout-product-card.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, CheckoutProductCardComponent, MatIconModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  cart = [1];
  totalPrice = 400;
}
