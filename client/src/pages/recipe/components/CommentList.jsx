import React from "react";
import { Container, PostNickname, PostDate } from "../Recipe.style";
import { TextWrap } from "../recipeView/RecipeView.style";

const CommentList = ({comment}) => {
  return (
    <TextWrap>
      <Container>
        <div>
          <PostNickname>{comment.nickname}</PostNickname>
          <PostDate>{comment.date}</PostDate>
          <div>{comment.content}</div>
        </div>
      </Container>
    </TextWrap>
  );
}

export default CommentList;