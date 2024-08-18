import { useAppDispatch, useAppSelector } from "../../../../hook/redux.ts";
import { ProductCart } from "../ProductCart/ProductCart.tsx";
import classes from "./ProductsList.module.css";
import classesPagination from "../../../../components/ui/style/Pagintaion.module.css";
import { Product } from "../../../../features/products/productsSlice.ts";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { filterActions } from "../../../../features/products/filterSlice.ts";
import {
  getProducts,
  getTotalPage,
} from "../../../../features/products/getProducts.ts";

export type ProductProps = Omit<Product, "desc" | "category">;
export const ProductsList = () => {
  const navigate = useNavigate();
  const totalPage = useAppSelector(getTotalPage());
  const products = useAppSelector(getProducts);
  const dispatch = useAppDispatch();
  // ;
  const handlePageChange = (value: { selected: number }) => {
    const currentPage = value.selected + 1;
    dispatch(filterActions.changePage(currentPage));
  };
  const onSelect = (id: string) => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      <div className={classNames(classes.cardContent)}>
        {products.map((product: ProductProps) => (
          <ProductCart
            onSelect={onSelect}
            id={product.id}
            image={product.image}
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
      {!!totalPage && (
        <ReactPaginate
          previousLabel="<<Previous"
          nextLabel="Next>>"
          pageClassName={classesPagination.pageItem}
          pageLinkClassName={classesPagination.pageLink}
          previousClassName={classesPagination.pageItem}
          previousLinkClassName={classesPagination.pageLink}
          nextClassName={classesPagination.pageItem}
          nextLinkClassName={classesPagination.pageLink}
          breakLabel="..."
          breakClassName={classesPagination.pageItem}
          breakLinkClassName={classesPagination.pageLink}
          pageCount={totalPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={classesPagination.pagination}
          activeClassName={classesPagination.active}
        />
      )}
    </>
  );
};
