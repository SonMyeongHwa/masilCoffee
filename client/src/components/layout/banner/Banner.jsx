import React, {useState} from "react";
import CartButton from "./cart/CartButton";
import GoTop from "./gotop/GoTop";
import { StyledBanner } from "./Banner.style";
import { ROUTES } from "../../../router/Routes";
import includeCianPage from "../../../util/includeCianPage";

function Banner(props) {
  
  const visible = includeCianPage(props.location)
  

  return (
    <div>
      {visible ? (
        <></>
      ) : (
        <StyledBanner>
          <CartButton location={props.location} />
          <GoTop location={props.location} />
        </StyledBanner>
      )}
    </div>
  );
}

export default Banner;
