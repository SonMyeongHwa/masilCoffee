import styled from "styled-components";

export const StyledPaymentcontainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  background-color: #d9d9d9;
  overflow: auto;
`;

export const StyledPaymentBox = styled.div`
  margin-top: 100px;
  margin: 100px auto;
  width: 100%;
  // 뷰포트 너비가 1024px 이하일 때
  @media (max-width: 1024px) {
    width: 100%; // 너비를 줄임
  }

  // 뷰포트 너비가 768px 이하일 때
  @media (max-width: 768px) {
    width: 100%; // 더 작은 화면에서는 더 넓게 설정
  }
`;

export const StyledPaymentActionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  > span {
    width: 100px;
    height: 95px;
    line-height: 50%;
    text-align: center;
    font-size: 5em;
    color: white;
  }
`;

export const StyledAction = styled.div`
  width: 150px;
  height: 95px;
  border: none;
  border-top-right-radius: 20px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  > div {
    display: flex;
    flex-direction: column;
  }
  > div > b {
    font-size: 23px;
  }
`;
export const StyledActionBg = styled.div`
  width: 150px;
  height: 95px;
  border: none;
  border-top-right-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #472e27;
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

  // 뷰포트 너비가 1024px 이하일 때
  @media (max-width: 1024px) {
    width: 100%; // 너비를 줄임
  }

  // 뷰포트 너비가 768px 이하일 때
  @media (max-width: 768px) {
    width: 100%; // 더 작은 화면에서는 더 넓게 설정
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
export const StyledOrderListMenu = styled.div`
  > i {
    display: block;
    width: 100%;
    border: 1px solid #472e27;
  }
`;
export const StyledOrderListMenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    > b {
      padding-bottom: 10px;
      font-size: 20px;
    }
  }
  > div:nth-child(2) {
    font-size: 20px;
    font-weight: 600;
  }
  > div:nth-child(3) {
    font-size: 20px;
    font-weight: 600;
  }
`;
export const StyledAmountPayment = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;

  > div {
    display: flex;
    justify-content: space-between;
  }
  > i {
    display: block;
    width: 100%;

    border: 2px solid #472e27;
  }
`;
