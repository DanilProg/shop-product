import { Product } from "../../../features/products/productsSlice.ts";
import classes from "./ProductCartAdmin.module.css";
import { PencilSvg } from "../../../components/ui/PencilSvg.tsx";
import { TrashSvg } from "../../../components/ui/TrashSvg.tsx";
import {toggleScrollBar} from "../../../lib/utils.ts";
interface ProductCartAdminProps extends Product {
  onClick: (product: Product) => void;
  deleteProduct:(url:string,id:string) => Promise<void>
  prod: Product;
}

export const ProductCartAdmin = ({
  name,
  price,
  image,
  category,
  desc,
  onClick,
  deleteProduct,
  prod,
}: ProductCartAdminProps) => {
  return (
      <div className={classes.cart}>
          <img alt={"imageProduct"} src={image} className={classes.image}/>
          <div className={classes.cartInfo}>
              <p className={classes.textDesc}>Наименование: </p>
              <h3 className={classes.title}>{name}</h3>
          </div>

          <div className={classes.cartInfo}>
              <p className={classes.textDesc}>Цена: </p>
              <p className={classes.text}>{price} ₽</p>
          </div>
          <div className={classes.cartInfo}>
              <p className={classes.textDesc}>Описание: </p>
              <p className={classes.text}>{desc}</p>
          </div>
          <div className={classes.cartInfo}>
              <p className={classes.textDesc}>Категория: </p>
              <p className={classes.text}>{category.value}</p>
          </div>

          <div className={classes.edit}>
              <div className={'mr'} onClick={() => {
                  onClick( prod)
                  toggleScrollBar(true)
              }}>
                  <PencilSvg/>
              </div>
              <div onClick={() => deleteProduct("data", prod.id)}>
                  <TrashSvg/>
              </div>
          </div>
      </div>
  );
};
