import { Component, Input } from '@angular/core';
import { Product } from '../../state/products/products.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() product: Product | undefined;
}
