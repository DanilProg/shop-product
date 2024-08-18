import { useAppDispatch, useAppSelector } from "../../hook/redux.ts";
import { Checkbox } from "../ui/Checkbox.tsx";
import {ChangeEvent, useState} from "react";

import { filterActions } from "../../features/products/filterSlice.ts";
import { getActiveCategories } from "../../features/products/getFilter.ts";
import classes from "./Filte.module.css";
import classNames from "classnames";
import {CircleX, SlidersHorizontal} from "lucide-react";

export const Filter = () => {
  const category = useAppSelector((state) => state.categories.category);
  const [activeFilter, setActiveFilter] = useState<boolean>(false)
  const activeCheckbox = useAppSelector(getActiveCategories);
  const dispatch = useAppDispatch();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(filterActions.applyCategory(e.target.value));
    } else {
      dispatch(filterActions.removeCategory(e.target.value));
    }
    console.log(e.target.value, e.target.checked)
  };

  return (
      <>
          <SlidersHorizontal className={classes.filterMenu} onClick={() => setActiveFilter(!activeFilter)}/>
          <form className={classNames(classes.filter, [activeFilter ? classes.filterActive : ""])}>
              <div className={classes.filterHeader}>
                  <p className={classes.text}>Фильтр по категориям</p>
                  <CircleX size={32} onClick={() => setActiveFilter(!activeFilter)} className={classes.filterClose} color={'gray'}/>
              </div>
              <div className={classes.filterContent}>
                  {category.map((cate) => (
                      <Checkbox
                          className={classes.textCheckbox}
                          key={cate.id}
                          label={cate.label}
                          value={cate.value}
                          checked={activeCheckbox.includes(cate.value)}
                          onChange={onChange}
                      />
                  ))}
              </div>
          </form>

      </>

  );
};
/*const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  getProduct(url);
};*/
/*const url = useAppSelector(getUrl);*/
/*const getProduct = async (url: string) => {
  await dispatch(getAllProducts(url));
};*/
