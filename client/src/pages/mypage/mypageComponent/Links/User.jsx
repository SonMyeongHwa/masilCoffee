import React from "react";
import { Link } from "react-router-dom";
import * as S from "../../style/MyPage.style";
import { ROUTES } from "../../../../router/Routes";

User.defaultProps = {
  userName: "김영준",
};

function User({ userName }) {
  return (
    <div>
      <S.UserLinkBox>
        <>
          안녕하세요! <br /> {userName}님
          <Link to={ROUTES.CONFIRMPASSWORD.path}>
            <S.LinkUserInfo>회원 정보 변경</S.LinkUserInfo>
          </Link>
        </>
      </S.UserLinkBox>
    </div>
  );
}

export default User;
