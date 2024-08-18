import classes from "./ProductCart.module.css";
import { ProductProps } from "../ProductsList/ProductsList.tsx";
interface ProductCart extends ProductProps {
  onSelect: (value: string) => void;
}

export const ProductCart = ({
  name,
  price,
  image,
  id,
  onSelect,
}: ProductCart) => {
  return (
    <div className={classes.cart} onClick={() => onSelect(id)}>
      <img alt={"imageProduct"} src={image} className={classes.image} />
      <h3 className={classes.title}>{name}</h3>
      <p className={classes.price}>{price} ₽</p>
    </div>
  );
};
