import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, switchMap, take } from 'rxjs';
import {
  Product,
  ProductsByCategoryState,
} from '../../state/products/products.model';
import { ProductsService } from '../../services/products.service';
import { loadProductsByCategory } from '../../state/products/products.actions';
import { selectProductByCategory } from '../../state/products/products.selectors';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../ui/card/card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CardComponent, CommonModule, MatProgressSpinnerModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router
  ) {}
  products$: Observable<ProductsByCategoryState> = this.store.select(
    selectProductByCategory
  );
  showFilter: boolean = false;
  categoryname: string | null = '';
  ngOnInit() {
    this.route.paramMap.pipe().subscribe((param) => {
      const categoryName = param.get('categoryName');
      this.categoryname = categoryName;
      this.store.dispatch(
        loadProductsByCategory({ category: categoryName || '' })
      );
    });
  }
  onCard(product: Product) {
    const url = 'product/' + product.id;
    this.router.navigate([url]);
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
  onFilter() {
    this.showFilter = !this.showFilter;
  }
}
