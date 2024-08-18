import { ButtonHTMLAttributes, ReactNode } from "react";
import classes from "./Button.module.css";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}
export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button {...props} className={classNames(classes.button, className)}>
      {children}
    </button>
  );
};
