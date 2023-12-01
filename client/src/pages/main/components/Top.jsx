import React, { useState, useEffect } from "react";
import * as S from "../components/style/Top.style";

const Top = () => {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(1);
  const [number3, setNumber3] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (number1 < 14) {
        setNumber1((prevNumber) => prevNumber + 1);
      }
      if (number2 < 131707) {
        setNumber2((prevNumber) => prevNumber + 8042);
      }
      if (number3 < 31803) {
        setNumber3((prevNumber) => prevNumber + 2361);
      }
    }, 50); // 1초 간격

    return () => clearInterval(interval);
  }, [number1, number2, number3]);

  return (
    <S.TopImage>
      <S.ContentWrap>
        <S.TopTitle>대한민국 국민 카페</S.TopTitle>
        <S.MiddleTitle>마실커피</S.MiddleTitle>
        <S.NumberWrap>
          <div>
            <S.BigFont>{number1}</S.BigFont>년<S.RoundBox>함께한 시간</S.RoundBox>
          </div>
          <div>
            <S.BigFont>{number2}</S.BigFont>개<S.RoundBox>총 판매량</S.RoundBox>
          </div>
          <div>
            <S.BigFont>{number3}</S.BigFont>명<S.RoundBox>마실커피 공식 회원</S.RoundBox>
          </div>
        </S.NumberWrap>
      </S.ContentWrap>
    </S.TopImage>
  );
};

export default Top;
