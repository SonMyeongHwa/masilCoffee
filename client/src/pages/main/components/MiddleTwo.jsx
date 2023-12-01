import React from "react";
import * as S from "./style/MiddleTwo.style";

const MiddleTwo = () => {
  return (
    <S.MiddleImageContainer>
      <S.ImageWrap>
        <S.MiddleImage height="60vh" imagePath="assets/images/coffee.jpg">
          <S.ContentWrap>
            <div>1999년부터 시작된 전문성</div>
            <S.BigFont>20년 이상의 노하우</S.BigFont>
          </S.ContentWrap>
        </S.MiddleImage>
      </S.ImageWrap>
      <S.ImageWrap>
        <S.MiddleImage height="30vh" imagePath="assets/images/coffeeCup.jpg">
          <S.ContentWrap>
            <div>생두 수입부터 로스팅까지</div>
            <S.BigFont>국내 최대 규모 로스팅 공장 보유!</S.BigFont>
          </S.ContentWrap>
        </S.MiddleImage>
        <S.MiddleImage height="30vh" imagePath="assets/images/coffeeBar.jpg">
          <S.ContentWrap>
            <div>10년 이상의 바리스타 채용</div>
            <S.BigFont>고품질 커피</S.BigFont>
          </S.ContentWrap>
        </S.MiddleImage>
      </S.ImageWrap>
    </S.MiddleImageContainer>
  );
};

export default MiddleTwo;
