import { RootState } from "../../app/store.ts";

export const getProducts = (state: RootState) => state.allProducts.products;
export const getTotalPage =
  (prec = 9) =>
  (state: RootState) =>
    Math.ceil(+state.allProducts.totalCount / prec);
