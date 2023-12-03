import React from "react";
import * as S from "../../style/MyPage.style";
import { ROUTES } from "../../../../router/Routes";
import { useNavigate } from "react-router-dom";


function User({ userName, email }) {
  const nav = useNavigate();

  const handleClick = () => {
    nav(`${ROUTES.USERINFOCHANGE.path}/${email}`)
  }

  return (
      <S.UserLinkBox>
        <>
          안녕하세요! <br /> "{userName}"님
          <div onClick={handleClick}>
            <S.LinkUserInfo>회원 정보 변경</S.LinkUserInfo>
          </div>
        </>
      </S.UserLinkBox>
  );
}

export default User;
