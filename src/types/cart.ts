export interface CartItem {
  id: number | string;
  title: string;
  price: number;
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
  count: number;
}
