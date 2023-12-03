import React from "react";
import LinkTo from "../../../ui/Link/LinkTo";
import IncludeRedPage from "../../../../util/IncludeRedPage";
import { ROUTES } from "../../../../router/Routes";
import { useSelector } from "react-redux";
import { RightSide, NavButton, LinkBox } from "../Headers.style";
import { TfiMenu } from "react-icons/tfi";
import { txt_color } from "../../../../type/color_type";

function NonUserRightSideItem(props) {
  const isLogin = useSelector((state) => state.login.loginState);

  const transLog = !isLogin ? "로그인" : "로그아웃";
  const transPath = !isLogin ? ROUTES.LOGIN.path : ROUTES.LOGOUT.path;

  const style = {
    textDecoration: "none",
    textAlign: "center",
    color: `${
      IncludeRedPage(props.location) ||
      props.location === ROUTES.ADMINMENU.path ||
      props.location === ROUTES.ADMINORDER.path ||
      props.location === ROUTES.ADMINMUSER.path
        ? txt_color.main_color
        : txt_color.sub_color
    }`,
    fontSize: "15px",
    fontWeight: "400",
    margin: "27px",
    cursor: "pointer",
  };

  return (
    <RightSide>
      <LinkTo
        there={{ to: `${transPath}`, name: `${transLog}` }}
        style={style}
      />

      {props.item.map((link) => {
        return (
          <LinkTo
            there={{
              to: link.to,
              name: link.name,
            }}
            style={style}
          />
        );
      })}
      <NavButton location={props.location} onClick={props.onVisible}>
        <TfiMenu />
      </NavButton>
    </RightSide>
  );
}

export default NonUserRightSideItem;
