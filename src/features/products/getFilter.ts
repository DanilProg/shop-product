import { RootState } from "../../app/store.ts";
import { createSelector } from "@reduxjs/toolkit";

export const getActiveCategories = (state: RootState) => {
  return state.filter.category;
};
export const getSort = (state: RootState) => {
  return state.filter.sorted;
};
export const getSearch = (state: RootState) => {
  return state.filter.search;
};
export const getPage = (state: RootState) => {
  return state.filter.page;
};
export const getUrl = createSelector(
  getActiveCategories,
  getSort,
  getSearch,
  getPage,
  (activeCategories, sort, search, page) => {
    return activeCategories.reduce(
      (acc, category) => {
        return acc.concat(`&category.value=${category}`);
      },
      `${sort.name + sort.order}&${page.name + page.pageNumber}${search.name + search.field}`,
    );
  },
);
export const getUrlAdmin = createSelector(
  getSearch,
  getPage,
  (search, page) => {
    return `${page.name + page.pageNumber}${search.name + search.field}`;
  },
);
