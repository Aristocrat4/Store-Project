import { Component } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadProducts } from '../../state/products/products.actions';
import { selectProducts } from '../../state/products/products.selectors';
import { Product, ProductState } from '../../state/products/products.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule, MatProgressSpinnerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products$: Observable<ProductState> = this.store.select(selectProducts);
  showFilter: boolean = false;
  constructor(private router: Router, private store: Store) {}
  onCard(product: Product) {
    const url = 'product/' + product.id;
    this.router.navigate([url]);
  }
  ngOnInit() {
    this.store.dispatch(loadProducts());
  }
  onFilter() {
    this.showFilter = !this.showFilter;
  }
  onHighToLow() {
    this.products$ = this.products$.pipe(
      map((product) => {
        let sortedArr = [...product.products].sort((a, b) => b.price - a.price);
        return { ...product, products: sortedArr };
      })
    );
  }
  onLowToHigh() {
    this.products$ = this.products$.pipe(
      map((product) => {
        let sortedArr = [...product.products].sort((a, b) => a.price - b.price);
        return { ...product, products: sortedArr };
      })
    );
  }
}
