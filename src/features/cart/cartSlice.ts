import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartState, CartItem } from "../../types/product";

const initialState: CartState = {
  cart: [],
  count: 0,
};

const sumItem = (item: CartItem[]): number => {
  const itemCounter = item.reduce((count, cart) => count + cart.quantity, 0);
  return itemCounter;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      if (!state.cart.find((item) => item?.id === action.payload.id)) {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
        state.count = sumItem(state.cart);
      }
    },
    removeToCart: (state, action: PayloadAction<{ id: number | string }>) => {
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = newCart;
      state.count = sumItem(newCart);
    },
    increase: (state, action: PayloadAction<{ id: number | string }>) => {
      const indexItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      state.cart[indexItem].quantity++;
      state.count = sumItem(state.cart);
    },
    decrease: (state, action: PayloadAction<{ id: number | string }>) => {
      const indexItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart[indexItem].quantity--;
      state.count = sumItem(state.cart);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeToCart, increase, decrease } =
  cartSlice.actions;
