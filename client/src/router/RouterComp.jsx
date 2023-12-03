import React, { Fragment } from "react";
import { ROUTES_ARR } from "./Routes";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Headers from "../components/layout/Header/Headers";
import Footer from "../components/layout/Footer/Footer";
import Banner from "../components/layout/banner/Banner";

const RouterComp = () => {
  const location = useLocation().pathname;

  return (
    <Fragment>
      <Headers location={location} />
      <Routes>
        {ROUTES_ARR.map((el) => (
          <Route key={el.path} path={el.path} element={el.element} />
        ))}
      </Routes>
      <Banner location={location} />
      <Footer location={location} />
    </Fragment>
  );
};

export default RouterComp;
