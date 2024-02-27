import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private productService: ProductsService
  ) {}
  products$: Observable<ProductsByCategoryState> = this.store.select(
    selectProductByCategory
  );
  ngOnInit() {
    this.route.paramMap.pipe().subscribe((param) => {
      const categoryName = param.get('categoryName');
      this.store.dispatch(
        loadProductsByCategory({ category: categoryName || '' })
      );
    });
  }
}
