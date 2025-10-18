import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/getAllProducts/getAllProductsSlice";
import productDetailsReducer from "../features/getDetails/getDetails";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
  },
});
