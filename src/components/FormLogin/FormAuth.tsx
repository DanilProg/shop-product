import { Input } from "../ui/Input.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import classes from "../FormProduct/FormProdduct.module.css";
export interface Auth {
  email: string;
  password: string;
  login: string;
}
const schema = z.object({
  email: z.string().min(1, { message: "Required" }),
  login: z.string(),
  password: z.string().min(1, { message: "Required" }),
});
type FormSchema = z.infer<typeof schema>;

export const FormAuth = ({
  onSubmit,
  variant,
}: {
  onSubmit: (value: FormSchema, variant: string) => void;
  variant: "login" | "reg";
}) => {
  const { register, handleSubmit, getValues } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });
  console.log(getValues())
  const submit = (values: FormSchema) => {
    onSubmit(values, variant);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <Input {...register("email")} label={"email"} autoComplete={"off"} />
        {variant === "reg" && (
          <Input {...register("login")} label={"логин"} autoComplete={"off"} />
        )}

        <Input
          {...register("password")}
          type={"password"}
          label={"Пароль"}
          autoComplete={"off"}
        />
        <button type="submit" className={classes.btn}>
          {variant === "login" ? "Войти " : "Регистрация"}
        </button>
      </div>
    </form>
  );
};
