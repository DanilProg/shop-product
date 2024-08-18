import classes from "./Category.module.css";
import { Input } from "../ui/Input.tsx";
import {useForm} from "react-hook-form";
import {TrashSvg} from "../ui/TrashSvg.tsx";
import {useAppSelector} from "../../hook/redux.ts";
export interface FormCategory {
    value:string;
    label:string
}
interface CategoryProps {
    onSubmit: (product: FormCategory) => void;
    deleteCategory:(url:string,id:string) => Promise<void>
}
export const Category = ({onSubmit, deleteCategory}:CategoryProps) => {
  const {register, handleSubmit, reset} = useForm<FormCategory>()
    const categories = useAppSelector((state) => state.categories.category);
    const submit = (values:FormCategory) => {
        onSubmit({...values, label:values.value});
        reset()
    };
  return (
    <div className={classes.category}>
      <form onSubmit={handleSubmit(submit)}>
        <Input {...register("value", {required:true, minLength:2})} className={classes.input} label={"Добавить новую категорию"} />
        <button type={'submit'} className={"button mt"}>Добавить</button>
      </form>
      <div className={classes.content}>
          { categories.map((category) => (
              <div className={classes.select} key={category.id}>
                  <p className={classes.text}>
                      {category.value}
                  </p>
                  <div onClick={() => deleteCategory('category',category.id)}>
                      <TrashSvg />
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};
