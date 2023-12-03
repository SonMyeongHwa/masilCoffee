import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartButton from "./cart/CartButton";
import GoTop from "./gotop/GoTop";
import { StyledBanner, CartCount } from "./Banner.style";
import { ROUTES } from "../../../router/Routes";
import includeCianPage from "../../../util/includeCianPage";

function Banner(props) {
  const visible = includeCianPage(props.location);
  const orders = useSelector((state) => state.order);
  const cartCount = orders.length;

  return (
    <div>
      {visible ? (
        <></>
      ) : (
        <StyledBanner>
          <GoTop location={props.location} />
          <CartCount>{cartCount}</CartCount>
          <CartButton location={props.location} />
        </StyledBanner>
      )}
    </div>
  );
}

export default Banner;
