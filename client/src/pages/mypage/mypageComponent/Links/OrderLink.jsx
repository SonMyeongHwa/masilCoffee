import {  useNavigate } from "react-router-dom";
import React from "react";
import * as S from "../../style/MyPage.style";
import { ROUTES } from "../../../../router/Routes";

function OrderLink({ userId }) {
  const nav = useNavigate();

  const handleClick = () => {
    nav(`${ROUTES.ORDERDETAILS.path}/${userId}`)
  }

  return (
    
      <S.OrderLinkBox onClick={handleClick}>주문정보</S.OrderLinkBox>
    
  );
}

export default OrderLink;
