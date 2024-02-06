import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-checkout-product-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './checkout-product-card.component.html',
  styleUrl: './checkout-product-card.component.scss',
})
export class CheckoutProductCardComponent {}
