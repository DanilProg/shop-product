import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store.ts";
import { productsInstance } from "../../lib/istance.ts";
import { Product } from "./productsSlice.ts";

export const getOneProduct = createAsyncThunk<
  Product[],
  string,
  { state: RootState }
>("products/getOneProduct", async (id: string): Promise<Product[]> => {
  const { data } = await productsInstance.get(`data?id=${id}`);
  return data;
});

const initialState: { loading: boolean; products: Product[] } = {
  products: [],
  loading: false,
};

export const oneProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOneProduct.pending, (state) => {
      state.loading = true;
      state.products = [];
    });
    builder.addCase(getOneProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
  },
});

export const { actions: oneProductActions, reducer: oneProductReducer } =
  oneProductSlice;
