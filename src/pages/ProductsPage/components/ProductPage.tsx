
import { useAppDispatch, useAppSelector } from "../../../hook/redux.ts";
import { useEffect } from "react";
import { getOneProduct } from "../../../features/products/productSlice.ts";
import { useParams } from "react-router-dom";
import classes from "./ProductPage.module.css";
import {Container} from "../../../components/ui/Container.tsx";

export const ProductPage = () => {
  const oneProduct = useAppSelector((state) => state.oneProduct);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const getProduct = async () => {
    if (id != null) {
      await dispatch(getOneProduct(id));
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <Container>
      {oneProduct.products.map((product) => (
        <div key={product.id} className={classes.product}>
          <div className={classes.inner}>
            <div className={classes.image}>
              <img
                alt={"Картинка товара"}
                src={product.image}
                className={classes.img}
              />
            </div>
            <div className={classes.info}>
              <h2 className={classes.title}>{product.name}</h2>
              <div className={classes.price}>
                <p className={classes.text}>Цена товара:</p>
                {product.price.toLocaleString() + " " + "₽"}
              </div>
              <div className={classes.productDescription}>
                <p className={classes.title}>Описание товара: </p>
                <p className={classes.text}>{product.desc}</p>
              </div>
              <p className={classes.text}>Категории {product.category.value}</p>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};
