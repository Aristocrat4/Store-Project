import { Product, Rating } from '../products/products.model';

export interface Item {
  productId: number;
  quantity: number;
}

export interface CartItem extends Product {}

export const initialCartState: CartItem[] = [];
