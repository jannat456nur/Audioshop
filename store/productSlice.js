import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCT_IMAGE_MAP } from "../data/productimagemap";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    // const response = await fetch("http://103.28.121.57/api/products");
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    return response.json();
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      const { payload } = action;
    //    state.status = 'success'
      payload.products.forEach((product) => {
        product.featuredImage = PRODUCT_IMAGE_MAP[product.name].featuredImage;
        product.images = PRODUCT_IMAGE_MAP[product.name].images;
      });
      state.products = payload.products;
      console.log("API RESPONSE", payload);
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export const selectStatus = (state) => state.products.status;
export default productSlice.reducer;
