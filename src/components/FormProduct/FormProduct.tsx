import { Input } from "../ui/Input.tsx";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Product } from "../../features/products/productsSlice.ts";
import classes from "./FormProdduct.module.css";
import { useAppSelector } from "../../hook/redux.ts";
import Select from "react-select";


const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  desc: z.string().min(1, { message: "Required" }),
  price: z.string().min(1, { message: "Required" }),
  image: z.string().min(1, { message: "Required" }),
  category: z.object({
    id: z.string(),
    value: z.string().min(1, { message: "Required" }),
    label: z.string(),
  }),
});

type FormSchema = z.infer<typeof schema>;

export const FormProduct = ({
  initialValues,
  onSubmit,
}: {
  initialValues: Product;
  onSubmit: (value: Product) => void;
}) => {
  const options = useAppSelector((state) => state.categories.category);
  const { register, handleSubmit, control } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  });
  const submit = (values: FormSchema) => {
    console.log(values, initialValues);
    onSubmit({...values, id:initialValues?.id});
  };
  return (
    <form onSubmit={handleSubmit(submit)} className={classes.form}>
      <div>
        <Input
          {...register("image")}
            className={classes.input}
          label={"Вставьте ссылка на картинку:"}
        />
        <Input
          {...register("name")}
          className={classes.input}
          label={"Наименование тоавара:"}
        />
        <Input
          {...register("price")}
          className={classes.input}
          label={"Цена товара:"}
        />
        <Input
          {...register("desc")}
          className={classes.input}
          label={"Описание товара:"}
        />
        <div className={classes.select}>
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              placeholder={'Выберите категорию'}
              onChange={(value) => field.onChange(value)}
              options={options}
            />
          )}
        />
        </div>
        <button type="submit" className={classes.btn}>
          {initialValues?.id ? "Редактировать" : "Добавить"}
        </button>
      </div>
    </form>
  );
};
{
}
/*;const category = z.object({
  id: z.string(),
  name: z.string(),
});*/
/*const schemaSelect = z.object({
  ,
});*/
/*type SelectSchema = z.infer<typeof schemaSelect>;*/
/* const { control } = useForm({
    defaultValues: {
      category: {},
    },
  });*/
/*  const { control } = useForm<SelectSchema>({
  resolver: zodResolver(schemaSelect),
  defaultValues: options,
});*/
