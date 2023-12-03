import React from "react";
import { useNavigate } from "react-router-dom";

import LinkTo from "../../ui/Link/LinkTo";

import { Header, LeftSide, RightSide, HeaderImg } from "./Headers.style";
import { ROUTES } from "../../../router/Routes";
import IncludeRedPage from "../../../util/IncludeRedPage";

const linkDatas = {
  right_side: [
    {
      to: ROUTES.LOGIN.path,
      name: "로그인",
    },
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
  const style = {
    textDecoration: "none",
    textAlign: "center",
    color: `${IncludeRedPage(props.location) ? "#191414" : "#f5f5f5"}`,
    fontSize: "15px",
    fontWeight: "400",
    margin: "27px",
  };

  const transLogo = IncludeRedPage(props.location)
    ? "/assets/images/Logo_White.png"
    : "/assets/images/Logo_Red.png";

  const nav = useNavigate();

  const handleClick = () => {
    nav(ROUTES.MAIN.path, { replace: false });
  };

  return (
    <div>
      <Header location={props.location}>
        <LeftSide>
          <HeaderImg src={transLogo} onClick={handleClick} />
          {linkDatas.left_side.map((link) => {
            return (
              <LinkTo there={{ to: link.to, name: link.name }} style={style} />
            );
          })}
        </LeftSide>
        <RightSide>
          {linkDatas.right_side.map((link) => {
            return (
              <LinkTo there={{ to: link.to, name: link.name }} style={style} />
            );
          })}
        </RightSide>
      </Header>
    </div>
  );
}

export default Headers;
