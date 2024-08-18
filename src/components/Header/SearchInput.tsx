import { Input } from "../ui/Input.tsx";
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux.ts";
import { filterActions } from "../../features/products/filterSlice.ts";

export const SearchInput = () => {
  const valueSearch = useAppSelector((state) => state.filter.search.field);
  const dispatch = useAppDispatch();
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    //const debounceFn = debounce(setValue(event.target.value), 1000);
    dispatch(filterActions.changeSearch(event.target.value));
  };
  return (
    <div>
      <Input
        value={valueSearch}
        name={"search"}
        onChange={onChange}
        placeholder={"Поиск по продуктам"}
      />
    </div>
  );
};
