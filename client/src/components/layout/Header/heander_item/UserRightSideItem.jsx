import React from "react";
import LinkTo from "../../../ui/Link/LinkTo";
import IncludeRedPage from "../../../../util/IncludeRedPage";
import { ROUTES } from "../../../../router/Routes";
import { RightSide, NavButton, LinkBox } from "../Headers.style";
import { TfiMenu } from "react-icons/tfi";
import { txt_color } from "../../../../type/color_type";

const items = [
  {
    to: ROUTES.MYPAGE.path,
    name: "마이페이지",
  },
  {
    to: ROUTES.LOGOUT.path,
    name: "로그아웃",
  },
];

function UserRightSideItem(props) {
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
      {items.map((link) => {
        return (
          <LinkTo there={{ to: link.to, name: link.name }} style={style} />
        );
      })}
      <NavButton location={props.location} onClick={props.onVisible}>
        <TfiMenu />
      </NavButton>
    </RightSide>
  );
}

export default UserRightSideItem;
