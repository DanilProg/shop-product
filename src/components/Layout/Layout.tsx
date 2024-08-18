import { Header } from "../Header/Header.tsx";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Header />
      <>
        <Outlet />
      </>
    </div>
  );
};
