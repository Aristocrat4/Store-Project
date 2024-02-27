import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from '../state/products/products.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categoriesAPI = 'https://fakestoreapi.com/products/categories';
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.categoriesAPI);
  }
}
