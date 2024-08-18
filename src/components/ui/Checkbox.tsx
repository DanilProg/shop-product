import classNames from "classnames";
import { InputHTMLAttributes } from "react";
import classes from "./style/Checkbox.module.css";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}
export const Checkbox = ({ className, label, ...props }: CheckboxProps) => {
  return (
    <label className={classNames(classes.checkboxWrapper, className)}>
      <input {...props} type="checkbox" className={classes.checkboxElement} />
      <p>{label}</p>
    </label>
  );
};
