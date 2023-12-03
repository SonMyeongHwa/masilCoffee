import React, { Fragment, useState, useEffect } from "react";
import { ROUTES_ARR } from "./Routes";
import { Routes, Route } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import Headers from "../components/layout/Header/Headers";
import Footer from "../components/layout/Footer/Footer";
import Banner from "../components/layout/banner/Banner";
import { axiosTokenConfirm } from "../api/user/user";
import AlertModal from "../components/ui/alert/AlertModal";
import { useDispatch, useSelector } from "react-redux";
import { actionLogout } from "../redux/action/login/loginAction";
import { removeUser } from "../redux/action/user/userAction";

const RouterComp = () => {
  const location = useLocation().pathname;
  const currentToken = localStorage.getItem("token");
  const stateToken = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const [token, setToken] = useState(currentToken);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      // 토큰이 있고 만료 시간이 정의되어 있다면 확인합니다.
      const res = await confirmTokenFn(stateToken);
      if (token) {
        if (res !== true) {
          setAlert(true);
          localStorage.removeItem("token");
          dispatch(actionLogout());
          dispatch(removeUser());
          console.log("로컬 있지만 요청은 배드");
          setTimeout(() => {
            setAlert(false);
          }, 2000);
        } else {
          console.log("로컬 있지만 요청은 참");

          return;
        }
      } else {
        if (res !== true) {
          localStorage.removeItem("token");
          dispatch(actionLogout());
          dispatch(removeUser());
          console.log("로컬 없고 요청은 배드");
        } else {
          console.log("로컬 없고 요청은 참");

          localStorage.setItem("token", stateToken);
        }

        setAlert(true);
        localStorage.removeItem("token");
        dispatch(actionLogout());
        dispatch(removeUser());
        console.log("else");
        setTimeout(() => {
          setAlert(false);
        }, 2000);
      }
    };

    verifyToken();
  }, [token, dispatch, location]);

  const confirmTokenFn = async (currentToken) => {
    const isValidToken = await axiosTokenConfirm(currentToken);
    console.log("token", isValidToken);
    return isValidToken;
  };

  return (
    <Fragment>
      {alert && <AlertModal>토큰 만료입니다. 다시 로그인해주세요!</AlertModal>}
      <Headers location={location} />
      <Routes>
        {ROUTES_ARR.map((el) => (
          <Route key={el.path} path={el.link} element={el.element} />
        ))}
      </Routes>
      <Banner location={location} />
      <Footer location={location} />
    </Fragment>
  );
};

export default RouterComp;
