export interface Product {
  id: number | string;
  title: string;
  price: number;
  category: string;
  image: string;
  description?: string;
}
