export interface Rating {
  rate: number;
  count: number;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  rating: Rating;
}
export interface Products {
  products: Product[];
}
export interface ProductState {
  products: Product[];
  loading: boolean;
  error: any;
}

export interface SingleProductState {
  product: Product | null;
  loading: boolean;
  error: any;
}

export interface ProductsByCategoryState {
  products: Product[];
  loading: boolean;
  error: any;
}
