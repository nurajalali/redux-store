import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";

import type { Product, ProductDetailsState } from "../../types/product";

const initialState: ProductDetailsState = {
  loading: false,
  productDetails: {},
  error: null,
};

const fetchProductDetails = createAsyncThunk<Product, number>(
  "productDetails/fetchProductDetails",
  async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
  }
);

const getDetailesSlice = createSlice({
  name: "productDetails",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchProductDetails.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.loading = false;
          state.productDetails = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.productDetails = {};
        state.error = action.error.message;
      });
  },
});

export default getDetailesSlice.reducer;

export { fetchProductDetails };
