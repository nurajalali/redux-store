import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  count: 0,
};

const sumItem = (item) => {
  const itemCounter = item.reduce((count, cart) => count + cart.quantity, 0);
  return itemCounter;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.find((item) => item?.id === action.payload.id)) {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
        state.count = sumItem(state.cart);
      }
    },
    removeToCart: (state, action) => {
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = newCart;
      state.count = sumItem(newCart);
    },
    increase: (state, action) => {
      const indexItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart[indexItem].quantity++;
      state.count = sumItem(state.cart);
    },
    decrease: (state, action) => {
      const indexItem = state.cart.find(
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
