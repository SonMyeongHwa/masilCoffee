import { Link } from "react-router-dom";
import React from "react";
import * as S from "../../style/MyPage.style";
import { ROUTES } from "../../../../router/Routes"; 

function CommentLink() {
  return (
    <div>
      <Link to={ROUTES.COMMENTLISTPAGE.path} style={{textDecoration: "none"}}>
        <S.CommentLinkBox>Link to Comment</S.CommentLinkBox>
      </Link>
    </div>
  );
}

export default CommentLink;
