import { createSlice } from "@reduxjs/toolkit";


export interface Sorted {
  name: string;
  order: "asc" | "desc";
}
export interface Search {
  name: string;
  field: string;
}
export interface IFilters {
  category: string[];
  page: {
    name: string;
    pageNumber: number;
  };
  sorted: Sorted;
  search: Search;
}
const initialState: IFilters = {
  category: [],
  page: {
    name: "_limit=9&_page=",
    pageNumber: 1,
  },
  sorted: {
    name: "_sort=price&_order=",
    order: "asc",
  },
  search: {
    name: "",
    field: "",
  },
};

export const filterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    applyCategory: (state, action) => {
      state.category.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.category = state.category.filter((item) => item !== action.payload);
    },
    changeSort: (state, action) => {
      state.sorted.order = action.payload;
    },
    changeSearch: (state, action) => {
      if (!action.payload) {
        state.search.name = "";
        state.search.field = "";
      } else {
        state.search.name = "&name_like=";
        state.search.field = action.payload;
      }
    },
    changePage: (state, action) => {
      state.page.pageNumber = action.payload;
    },
  },
});

export const { actions: filterActions, reducer: filterReducer } = filterSlice;
