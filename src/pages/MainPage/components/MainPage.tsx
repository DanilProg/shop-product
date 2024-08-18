import { ProductsList } from "./ProductsList/ProductsList.tsx";
import { useEffect } from "react";
import { getAllProducts } from "../../../features/products/productsSlice.ts";
import { useAppDispatch, useAppSelector } from "../../../hook/redux.ts";
import classes from "./../../../layout.module.css";
import { LeftSidebar } from "../../../components/LeftSidebar/LeftSidebar.tsx";
import { Sorting } from "../../../components/Sorting/Sorting.tsx";
import { getUrl } from "../../../features/products/getFilter.ts";
import {Container} from "../../../components/ui/Container.tsx";

export const MainPage = () => {
  const url = useAppSelector(getUrl);

  const dispatch = useAppDispatch();

  const getProduct = async () => {
    await dispatch(getAllProducts(url));
  };
  useEffect(() => {
    getProduct();
  }, [url]);
  return (
      <Container>
        <div className={classes.wrapper}>
          <LeftSidebar className={classes.leftSidebar}/>
          <div className={classes.content}>
            <Sorting/>
            <ProductsList/>
          </div>
        </div>
      </Container>

  );
};
