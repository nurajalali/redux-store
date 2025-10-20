export interface Product {
  id: number | string;
  title: string;
  price: number;
  category: string;
  image: string;
  description?: string;
}

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string;
}

export interface ProductDetailsState {
  productDetails: Partial<Product>;
  loading: boolean;
  error: string | null;
}

export interface ListItem {
  id: number | string;
  isExist: boolean;
}

export interface ListState {
  list: ListItem[];
}
