import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { ProductsState, Product } from "../../types/product";

const initialState: ProductsState = {
  loading: false,
  products: [],
  error: "",
};

const fetchProducts = createAsyncThunk<Product[]>(
  "products / fetchProducts",
  () => {
    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => data);
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.products = action.payload;
          state.error = "";
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;

export { fetchProducts };
