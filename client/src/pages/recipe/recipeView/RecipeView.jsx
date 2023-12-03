import React from "react";
import { Background, ContainerWrap, Container, Wrap } from "../Recipe.style";
import * as S from "./RecipeView.style";
import PostList from "../components/PostList";
import PostInput from "../components/PostInput";
import CommentList from "../components/CommentList";
import postData from "../postData.json";
import commentData from "../commentData.json";

// 수정/삭제 추가 예정
const RecipeView = () => {
  return (
    <Background>
      <ContainerWrap>
        <Wrap>
          {/* 임시로 값 넣음. 나중에는 id값 불러올것.*/}
          <PostList post={postData[0]} />
        </Wrap>
        <S.TextWrap>
          <Container>
            <PostInput placeholder={"댓글 작성"} text="작성" />
          </Container>
        </S.TextWrap>
        {commentData.map((comment) => (
          <CommentList comment={comment} />
        ))}
      </ContainerWrap>
    </Background>
  );
};

export default RecipeView;
