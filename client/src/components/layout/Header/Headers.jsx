import React from "react";
import LeftSideItem from "./heander_item/LeftSideItem";
import TransComponent from "./heander_item/TransComponent";

import { Header } from "./Headers.style";
import { ROUTES } from "../../../router/Routes";
import { useSelector } from "react-redux";

const linkDatas = {
  non_user_right: [
    {
      to: ROUTES.REGISTER.path,
      name: "회원가입",
    },
  ],
  right_side: [
    {
      to: ROUTES.REGISTER.path,
      name: "회원가입",
    },
    {
      to: ROUTES.MYPAGE.path,
      name: "마이페이지",
    },
  ],
  left_side: [
    {
      to: ROUTES.ORDER.path,
      name: "MENU",
    },
    {
      to: ROUTES.RECIPE.path,
      name: "꿀조합",
    },
  ],
};

function Headers(props) {
  const role = useSelector((state) => state.login);
  console.log("header role", role)

  return (
    <div>
      <Header location={props.location}>
        <LeftSideItem item={linkDatas.left_side} location={props.location} />
        <TransComponent userRole={role} linkDatas={linkDatas} />
      </Header>
    </div>
  );
}

export default Headers;
