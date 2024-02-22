import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Product } from '../state/products/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsAPI = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.productsAPI)
      .pipe(catchError(this.handleError<Product[]>('getProducts', [])));
  }

  getSingleProduct(id: number): Observable<Product> {
    const api = this.productsAPI + '/' + id;
    return this.http
      .get<Product>(api)
      .pipe(catchError(this.handleError<Product>('getSingleProduct')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
