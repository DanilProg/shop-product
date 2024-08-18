import { filterActions } from "../../features/products/filterSlice.ts";
import { useDispatch } from "react-redux";
import Select, { ActionMeta } from "react-select";
import { options } from "./SortingSchema.ts";
import classes from "./Sorting.module.css";

interface SortOptions {
  value: string;
  label: string;
}
export const Sorting = () => {
  const dispatch = useDispatch();
  //const sort = useAppSelector(getSort);
  const onChange = (
    option: SortOptions | null,
    actionMeta: ActionMeta<SortOptions>,
  ) => {
    console.log(option, actionMeta);
    dispatch(filterActions.changeSort(option?.value));
  };
  return (
    <div className={classes.sorting}>
      <Select
        options={options}
        onChange={onChange}
        name={"sort"}
        defaultValue={options[0]}
      />
    </div>
  );
};
/*
{sortingMap.map((sort) => (
    <option value={sort.value} key={sort.value}>
        {sort.label}
    </option>
))}*/
