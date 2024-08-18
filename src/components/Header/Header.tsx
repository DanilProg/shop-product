import classes from "./Header.module.css";
import { SearchInput } from "./SearchInput.tsx";
import { Container } from "../ui/Container.tsx";
import { LoginSvg } from "../ui/LoginSvg.tsx";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook/redux.ts";
import { authActions } from "../../features/products/authSlice.ts";
import {CircleX, LogOut, Logs} from "lucide-react";
import {useState} from "react";
import classNames from "classnames";

export const Header = () => {
  const navigate = useNavigate();
  const userAuth = useAppSelector((state) => state.auth);
  const [activeMenu, setActiveMenu] = useState(false);
  console.log(activeMenu)
  const dispatch = useAppDispatch();
  const exitLogin = () => {
    navigate("/auth");
    dispatch(authActions.authUser(""));
    localStorage.removeItem("auth");
  };
  const entryLogin = () => {
    if (userAuth.auth) {
      navigate("/");
    } else {
      navigate("/auth");
    }
  };
  return (
    <div className={classes.header}>
      <Container>
        <div className={classes.headerInner}>
          <div className={classes.headerLogo} onClick={() => navigate("/")}>
            <img
                alt={"logo"}
                src={
                  "https://avatars.mds.yandex.net/i?id=3c4431eb59eb6278f168364b8737564f6a34aac3-9843030-images-thumbs&n=13"
                }
                className={classes.logo}
            />
          </div>
          <SearchInput/>
          <div className={classes.menuIcon} onClick={() => setActiveMenu(true)}>
            <Logs size={32}/>
          </div>
          <div className={classNames(classes.menu, activeMenu ? classes.active : "")}>

            <div className={classes.menuItem}>
              <CircleX size={32} onClick={() => setActiveMenu(false)} className={classes.menuClose} color={'gray'}/>
              {userAuth.auth ? (
                  <div className={classes.admin} onClick={() => {
                    navigate("/admin")
                    setActiveMenu(false)
                  }}>
                    admin
                  </div>
              ) : (
                  <div className={classes.box}></div>
              )}

              <div className={classes.auth}>
                {userAuth.auth ? (
                    <>
                      <div onClick={() => {
                        exitLogin()
                        setActiveMenu(false)
                      }}>
                        <LogOut size={32} className={classes.login}/>
                      </div>
                    </>
                ) : (
                    <>
                      <div onClick={() => {
                        entryLogin()
                        setActiveMenu(false)
                      }}>
                        <LoginSvg/>
                      </div>
                    </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
