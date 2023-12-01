import styled from "styled-components";

export const StyledPaymentcontainer = styled.div`
  font-family: "Noto Sans", sans-serif; // Noto Sans 폰트 적용
  box-sizing: border-box;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  background-color: #d9d9d9;
  overflow: auto;
`;

export const StyledPaymentBox = styled.div`
  > h1 {
    color: black;
    margin-top: 100px;
    margin-bottom: 100px;
    text-align: center;
  }
  margin-top: 100px;
  margin: 0 auto;
  width: 80%;
  // 뷰포트 너비가 1024px 이하일 때
  @media (max-width: 1024px) {
    width: 100%; // 너비를 줄임
  }

  // 뷰포트 너비가 768px 이하일 때
  @media (max-width: 930px) {
    width: 90%; // 더 작은 화면에서는 더 넓게 설정
  }

  // 뷰포트 너비가 480px 이하일 때
  @media (max-width: 600px) {
    width: 100%; // 모바일 화면에서는 최대 너비로 설정
  }
`;
export const StyledCheck = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    > input {
      width: 20px;
      height: 20px;
    }
    > h2 {
      padding-left: 10px;
    }
  }
`;

export const StyledPayment = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: auto;
  background-color: #f5f5f5;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 30px 0px 30px 0px;

  @media (max-width: 1024px) {
    width: 75%; // 화면이 작을 때는 너비를 줄임
  }

  @media (max-width: 768px) {
    width: 90%; // 더 작은 화면에서는 더 넓게 설정
  }

  @media (max-width: 480px) {
    width: 100%; // 모바일 화면에서는 최대 너비로 설정
  }
`;

export const StyledInfoContainer = styled.div`
  width: 90%;
  margin: 50px;
`;

export const StyledInfoBox = styled.div`
  text-align: start;
`;

export const StyledOrderList = styled.div`
  padding-top: 30px;
  > i {
    display: block;
    width: 100%;

    border: 2px solid #472e27;
  }
`;

export const StyledAmountPayment = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > h2:nth-child(2) {
      color: #472e27;
    }
  }
  > i {
    display: block;
    width: 100%;

    border: 2px solid #472e27;
  }
`;
export const StyledButton = styled.div`
  display: flex;
`;
export const StyleTotalText = styled.div`
  display: flex;
  align-items: center;
  > h2:nth-child(1) {
    padding-right: 15px;
    font-size: 15px;
  }
  > h2:nth-child(2) {
    color: #472e27;
  }
`;
