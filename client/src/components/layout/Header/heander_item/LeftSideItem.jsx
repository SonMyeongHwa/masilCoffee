import React, { useState } from "react";
import LinkTo from "../../../ui/Link/LinkTo";
import { HeaderImg, LeftSide, LinkBox } from "../Headers.style";
import IncludeRedPage from "../../../../util/IncludeRedPage";
import { ROUTES } from "../../../../router/Routes";
import { useNavigate } from "react-router-dom";
import { txt_color } from "../../../../type/color_type";

function LeftSideItem(props) {
  const nav = useNavigate();
  const [toggle, setToggle] = useState("");

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

  const transLogo =
    IncludeRedPage(props.location) ||
    ROUTES.ADMINMENU.path === props.location ||
    ROUTES.ADMINMUSER.path === props.location ||
    ROUTES.ADMINORDER.path === props.location
      ? "/assets/images/Logo_Red.png"
      : "/assets/images/Logo_White.png";

  const handleClickLogo = () => {
    nav(ROUTES.MAIN.path, { replace: false });
  };

  const handleToggle = (e) => {
    setToggle(e.target.value);
    console.log(e.target.value);
  };

  return (
    <LeftSide>
      <HeaderImg src={transLogo} onClick={handleClickLogo} />
      {props.item.map((link, idx) => {
        return (
          <LinkBox
            value={idx}
            className={"btn" + (idx === toggle ? "active" : "")}
            onClick={handleToggle}
          >
            <LinkTo there={{ to: link.to, name: link.name }} style={style} />
          </LinkBox>
        );
      })}
    </LeftSide>
  );
}

export default LeftSideItem;
