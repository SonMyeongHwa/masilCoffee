import React from "react";
import CartButton from "./cart/CartButton";
import GoTop from "./gotop/GoTop";
import { StyledBanner } from "./Banner.style";

function Banner(props) {
  return (
    <StyledBanner>
      <CartButton location={props.location}/>
      <GoTop location={props.location}/>
    </StyledBanner>
  );
}

export default Banner;
