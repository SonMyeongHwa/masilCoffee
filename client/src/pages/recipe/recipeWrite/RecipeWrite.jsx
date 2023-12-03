import React from "react";
import { Background, ContainerWrap, Container, Title } from "../Recipe.style";
import * as S from "./RecipeWrite.style";
import CategoryButton from "../components/CategoryButton";
import FileUpload from "../components/FileUpload";
import SquareButton from "../../../components/ui/button/SquareButton";

const RecipeWrite = () => {
  return (
    <Background>
      <ContainerWrap>
        <Container>
          <Title>나만의 꿀조합 작성하기</Title>
          <CategoryButton />
          <S.TextArea placeholder="글 내용을 입력해주세요." />
          <FileUpload />
          <S.ButtonWrap>
            <SquareButton text={"등록하기"} type={"red"} />
            <SquareButton text={"취소하기"} type={"grey"} />
          </S.ButtonWrap>
        </Container>
      </ContainerWrap>
    </Background>
  );
};

export default RecipeWrite;
