import classNames from "classnames";
import { Filter } from "../Filter/Filter.tsx";

export const LeftSidebar = ({ className }: { className: string }) => {
  return (
    <div className={classNames(className)}>
      <Filter />
    </div>
  );
};
