import { Route, Routes } from "react-router-dom";
import { MainPage } from "../../pages/MainPage/components/MainPage.tsx";
import { ProductPage } from "../../pages/ProductsPage/components/ProductPage.tsx";
import { Layout } from "../../components/Layout/Layout.tsx";
import { AuthPage } from "../../pages/AuthPage/components/AuthPage.tsx";
import { AdminPage } from "../../pages/AdminPage/components/AdminPage.tsx";
import { useAppSelector } from "../../hook/redux.ts";

export const RoutPage = () => {
  const { auth } = useAppSelector((state) => state.auth);
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/product/:id"} element={<ProductPage />} />
          <Route path={"/auth"} element={<AuthPage />} />
          <Route path={"*"} element={<MainPage />} />
          {auth && <Route path={"/admin"} element={<AdminPage />} />}
        </Route>
      </Routes>
    </>
  );
};
