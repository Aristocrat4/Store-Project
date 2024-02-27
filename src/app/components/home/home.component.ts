import { Component } from '@angular/core';
import { CarouselComponent } from '../../ui/carousel/carousel.component';
import { CardComponent } from '../../ui/card/card.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadProducts } from '../../state/products/products.actions';
import { selectProducts } from '../../state/products/products.selectors';
import { Product, ProductState } from '../../state/products/products.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselComponent,
    CardComponent,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products$: Observable<ProductState> = this.store.select(selectProducts);
  constructor(private router: Router, private store: Store) {}
  onCard(product: Product) {
    const url = 'product/' + product.id;
    this.router.navigate([url]);
  }
  ngOnInit() {
    this.store.dispatch(loadProducts());
  }
}
