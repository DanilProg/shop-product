import classes from "./style/Container.module.css";
import classNames from "classnames";

interface Container {
  children: React.ReactNode;
  className?: string;
}
export const Container = ({ children, className }: Container) => {
  return (
    <div className={classNames(classes.container, className)}>{children}</div>
  );
};
