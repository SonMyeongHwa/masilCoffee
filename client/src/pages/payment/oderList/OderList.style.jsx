import styled from "styled-components";

export const StyledOrderList = styled.div`
  font-family: "Noto Sans", sans-serif; // Noto Sans 폰트 적용
  > i {
    display: block;
    width: 100%;

    border: 2px solid #472e27;
  }
  // 뷰포트 너비가 1024px 이하일 때
  @media (max-width: 1024px) {
    width: 100%; // 너비를 줄임
  }

  // 뷰포트 너비가 768px 이하일 때
  @media (max-width: 768px) {
    width: 100%; // 더 작은 화면에서는 더 넓게 설정
  }
`;

export const StyledOrderListMenu = styled.div`
  > i {
    display: block;
    width: 100%;
    border: 1px solid #472e27;
  }
  > div {
    // 뷰포트 너비가 1024px 이하일 때
    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      > div {
        width: 100%;
        padding: 30px 0;
        border-bottom: 1px solid #472e27;
      }
      > button {
        margin: 30px 0;
        margin-left: 0 !important;
      }
    }
  }
`;
export const StyledOrderListMenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  border-bottom: 1px solid #472e27;

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
export const StyledOrderListMednuRequest = styled.div`
  font-size: 20px;
  font-weight: bold;
  border-bottom: none !important;
`;

export const StyledAmountPayment = styled.div`
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
export const StyledOrderListMenuText = styled.div`
  font-size: 14px;
  font-weight: bold;
  > span {
    padding-right: 10px;
  }
`;
