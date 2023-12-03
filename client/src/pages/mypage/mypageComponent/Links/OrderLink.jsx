import { Link } from "react-router-dom";
import React from "react";
import * as S from "../../style/MyPage.style";
import { ROUTES } from "../../../../router/Routes";

function OrderLink() {
  return (
    <div>
      <Link to={ROUTES.ORDERDETAILS.path} style={{textDecoration: "none"}}>
        <S.OrderLinkBox>Link to Order</S.OrderLinkBox>
      </Link>
    </div>
  );
}

export default OrderLink;
