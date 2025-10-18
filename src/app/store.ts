import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/getAllProducts/getAllProductsSlice";
import productDetailsReducer from "../features/getDetails/getDetails";

export const store = configureStore({
  reducer: { products: productsReducer, productDetails: productDetailsReducer },
});
