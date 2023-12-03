import React from "react";
import * as S from "../Recipe.style";
import { BsChat } from "react-icons/bs";
import ImageSlider from "./ImageSlider";

const PostList = ({post}) => {
  return (
    <>
      <S.Container>
        <div>
          <S.PostNickname>{post.nickname}</S.PostNickname>
          <S.PostDate>{post.date}</S.PostDate>
        </div>
        <S.PostPre>{post.post}</S.PostPre>
        {/* ImageSlider 조건문 넣기 */}
        <ImageSlider />
        <S.CommentWrap>
          <BsChat />
          <S.CommentNum>{post.comment}</S.CommentNum>
        </S.CommentWrap>
      </S.Container>
    </>
  );
};

export default PostList;
