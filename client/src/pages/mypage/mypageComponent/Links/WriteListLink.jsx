import React from "react";
import * as S from "../../style/MyPage.style";
import { ROUTES } from "../../../../router/Routes";
import { useNavigate } from "react-router-dom";

function WriteListLink({ userId }) {
  const nav = useNavigate();
  

  const handleClick = () => {
    nav(`${ROUTES.WRITELIST.path}/${userId}`);
  };

  return (
      <S.WriteLinkBox onClick={handleClick}>내가 쓴 글</S.WriteLinkBox>
    
  );
}

export default WriteListLink;
