import React from "react";
import { UserTitle } from "../../../pages/mypage/style/MyPage.style";

function Title(props) {
  return (
      <UserTitle>{props.children}</UserTitle>
  
  );
}

export default Title;
