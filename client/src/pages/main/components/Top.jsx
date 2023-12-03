import React from "react";
import * as S from "../components/style/Top.style";

const Top = () => {
  return (
    <S.TopImage>
      <S.ContentWrap>
        <S.TopTitle>대한민국 국민 카페</S.TopTitle>
        <S.MiddleTitle>마실커피</S.MiddleTitle>
        <S.NumberWrap>
          <div>
            <S.BigFont>9</S.BigFont>년
            <S.RoundBox>함께한 시간</S.RoundBox>
          </div>
          <div>
            <S.BigFont>234,000</S.BigFont>개
            <S.RoundBox>총 판매량</S.RoundBox>
          </div>
          <div>
            <S.BigFont>334,887</S.BigFont>명
            <S.RoundBox>마실커피 공식 회원</S.RoundBox>
          </div>
        </S.NumberWrap>
      </S.ContentWrap>
    </S.TopImage>
  );
};

export default Top;
