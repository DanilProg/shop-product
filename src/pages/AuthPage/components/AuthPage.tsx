import { Container } from "../../../components/ui/Container.tsx";
import { Auth, FormAuth } from "../../../components/FormLogin/FormAuth.tsx";
import { useEffect, useState } from "react";
import classes from "./AuthPage.module.css";
import { productsInstance } from "../../../lib/istance.ts";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../../features/products/authSlice.ts";
import { useAppDispatch } from "../../../hook/redux.ts";

export const AuthPage = () => {
  const [selectAuth, setSelectAuth] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setErrorMessage("");
  }, [selectAuth]);
  const postRegisterUser = async (value: Auth) => {
    try {
      const { data } = await productsInstance.post(`users`, value, {
        headers: { "Content-Type": "application/json" },
      });
      localStorage.setItem("auth", JSON.stringify(data));
      dispatch(authActions.authUser("admin"));
      setErrorMessage("");
      navigate("/");
    } catch (e) {
      setErrorMessage("Произошла ошибка");
    }
  };
  const postAuthUser = async (value: Auth) => {
    try {
      const { data } = await productsInstance.post(`login`, value, {
        headers: { "Content-Type": "application/json" },
      });
      localStorage.setItem("auth", JSON.stringify(data));
      setErrorMessage("");
      dispatch(authActions.authUser("admin"));
      navigate("/");
    } catch (e) {
      setErrorMessage("Произошла ошибка");
    }
  };
  const onChangeForm = (value: Auth, variant: string) => {
    if (variant === "reg") {
      postRegisterUser(value);
    } else {
      postAuthUser(value);
    }
  };
  return (
    <Container className={classes.content}>
      <div className={classes.form}>
        <span>{errorMessage}</span>
        <FormAuth
          variant={selectAuth ? "login" : "reg"}
          onSubmit={(values, variant) => onChangeForm(values, variant)}
        />
        {selectAuth ? (
          <div>
            Не зарегистрированы ?{" "}
            <p onClick={() => setSelectAuth(false)} className={classes.text}>
              Регистрация
            </p>
          </div>
        ) : (
          <div>
            Уже зарегистрированы ?
            <p onClick={() => setSelectAuth(true)} className={classes.text}>
              Войти
            </p>
          </div>
        )}
      </div>
    </Container>
  );
};
