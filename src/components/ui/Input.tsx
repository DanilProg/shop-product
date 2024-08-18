import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import classes from "./style/Input.module.css";
import classNames from "classnames";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onEndInput?: ReactNode;
  label?: string;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, onEndInput, className, ...props }, ref) => {
    return (
      <div className={classes.inputChar}>
        <p>{label}</p>
        <input {...props} ref={ref} className={classNames(classes.input, className)} />
        {onEndInput}
      </div>
    );
  },
);
