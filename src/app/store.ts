import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "../features/products/productsSlice.ts";
import { categorySlice } from "../features/products/categorySlice.ts";
import { filterSlice } from "../features/products/filterSlice.ts";
import { oneProductSlice } from "../features/products/productSlice.ts";
import { authSlice } from "../features/products/authSlice.ts";

export const store = configureStore({
  reducer: {
    allProducts: productsSlice.reducer,
    categories: categorySlice.reducer,
    filter: filterSlice.reducer,
    oneProduct: oneProductSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
