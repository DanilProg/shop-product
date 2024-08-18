import classes from "./style/Pagination.module.css";
import { ButtonHTMLAttributes, ReactNode } from "react";
interface ButtonPagination extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export const ButtonPagination = ({ children }: ButtonPagination) => {
  return <button className={classes.btn}>{children}</button>;
};
