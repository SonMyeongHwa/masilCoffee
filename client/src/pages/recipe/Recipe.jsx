import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Recipe.style";
import CategoryButton from "./components/CategoryButton";
import PostList from "./components/PostList";
import PostInput from "./components/PostInput";
import SquareButton from "../../components/ui/button/SquareButton";
import postData from "./postData.json";

const Recipe = () => {
  return (
    <S.Background>
      <S.ContainerWrap>
        <S.Container>
          <S.Wrap>
            <S.Title>나만의 꿀조합 공유</S.Title>
            <Link to="/RecipeWrite">
              <SquareButton text={"작성하기"} type={"red"} />
            </Link> 
          </S.Wrap>
          <PostInput placeholder={"검색어를 입력하세요."} text="검색" />
          <CategoryButton />
        </S.Container>
        {/* 나중에 link 넣기 */}
        {postData.map((post) => (
          <S.PostWrap>
            <PostList post={post} />
          </S.PostWrap>
        ))}
      </S.ContainerWrap>
    </S.Background>
  );
};

export default Recipe;
