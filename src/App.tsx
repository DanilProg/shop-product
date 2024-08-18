import { useEffect } from "react";
import { getCategory } from "./features/products/categorySlice.ts";
import { useAppDispatch } from "./hook/redux.ts";
import { RoutPage } from "./lib/RoutPage/RoutPage.tsx";

import { productsInstance } from "./lib/istance.ts";
import { authActions } from "./features/products/authSlice.ts";

export const App = () => {
  const dispatch = useAppDispatch();
  const getUsers = async (token: string) => {
    try {
      await productsInstance.get("660/auth", {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(authActions.authUser("admin"));
    } catch (e) {
      console.error(e, "Авторизация не прошла");
    }
  };
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      const token = JSON.parse(auth);
      getUsers(token.accessToken);
    }
  }, []);
  const getCategories = async () => {
    await dispatch(getCategory());
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div>
      <RoutPage />
    </div>
  );
};
