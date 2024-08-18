import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsInstance } from "../../lib/istance.ts";
import { RootState } from "../../app/store.ts";
import { Category } from "./categorySlice.ts";

export const getAllProducts = createAsyncThunk<
  ProductPromise,
  string,
  { state: RootState }
>("products/getAllProducts", async (url: string): Promise<ProductPromise> => {
  const { data, headers } = await productsInstance.get(`data?${url}`);
  const totalCount = headers["x-total-count"];
  return { data, totalCount };
});

export interface Product {
  id: string;
  name: string;
  desc: string;
  price: string;
  image: string;
  category: Category;
}
export interface ProductPromise {
  data: Product[];
  totalCount: string;
}
export interface IProducts {
  products: Product[];
  loading: boolean;
  totalCount: string;
}
const initialState: IProducts = {
  products: [],
  loading: false,
  totalCount: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = false;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.totalCount = action.payload.totalCount;
      state.products = action.payload.data;
      state.loading = true;
    });
  },
});

export const { actions: productsActions, reducer: productsReducer } =
  productsSlice;
