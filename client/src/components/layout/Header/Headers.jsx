import React, { useState } from "react";
import LeftSideItem from "./heander_item/LeftSideItem";
import TransComponent from "./heander_item/TransComponent";

import { Header, MiniLogo, HeaderBtn } from "./Headers.style";
import { ROUTES } from "../../../router/Routes";
import { useSelector } from "react-redux";
import { TfiMenu } from "react-icons/tfi";
import Menu from "./util/Menu";
import { useNavigate } from "react-router-dom";

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
  const role = useSelector((state) => state.login.role);
  const [visible, setVisible] = useState(false);
  const nav = useNavigate()

  const handleClick = () => {
    setVisible(!visible);
  };

  const onVisible = () => {
    setVisible(!visible);
  };
  const handleClickMiniLogo = () => {
    nav(ROUTES.MAIN.path);
    (window.location || document.location).reload();
  }

  return (
    <div>
      <Header location={props.location}>
        <MiniLogo src="\assets\images\Logo.png" onClick={handleClickMiniLogo}/>
        <LeftSideItem item={linkDatas.left_side} location={props.location} />
        <TransComponent
          userRole={role}
          linkDatas={linkDatas}
          location={props.location}
          onVisible={onVisible}
        />
        <HeaderBtn location={props.location} onClick={handleClick}>
          <TfiMenu />
        </HeaderBtn>
      </Header>
      {!visible ? <></> : <Menu role={role} />}
    </div>
  );
}

export default Headers;
