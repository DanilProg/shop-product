import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store.ts";
import { productsInstance } from "../../lib/istance.ts";

export const getCategory = createAsyncThunk<
  Category[],
  void,
  { state: RootState }
>("products/getCategory", async (): Promise<Category[]> => {
  const { data } = await productsInstance.get("http://localhost:4000/category");
  return data;
});
export interface Category {
  id: string;
  value: string;
  label: string;
}
export interface ICategory {
  category: Category[];
}
const initialState: ICategory = {
  category: [],
};

export const categorySlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      console.log(state, action);
    },
  },
  extraReducers: (builder) => {

    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.category = action.payload;
    });
  },
});

export const { actions: categoryActions, reducer: categoryReducer } =
  categorySlice;
