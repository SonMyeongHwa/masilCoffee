import styled from "styled-components";

export const StyledOrderListMenu = styled.div`
  font-family: "Noto Sans", sans-serif; // Noto Sans 폰트 적용
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

export const StyledOrderOptionBox = styled.div`
  > div {
    padding: 10px 0;
  }
`;
export const StyledOrdeName = styled.div`
  > b {
    font-size: 20px;
  }
`;
export const StyledOrderText = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  > span {
    padding-left: 20px;
    font-weight: bold;
    color: #472e27;
    font-size: 17px;
  }
  > div {
    display: flex;
    align-items: center;
    padding-right: 20px;
    > span {
      padding-left: 18px;
    }

    > button {
      width: 20px;
      height: 20px;
      background-color: white;
      border: 1px solid #472e27;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
    }
    > b {
      font-size: 14px;
    }
  }

  > b {
    font-size: 14px;
  }
`;
export const StyledOrderOption = styled.div`
  display: flex;
  font-size: 14px;
  > span {
    padding-right: 10px;
    color: #878585;
    font-weight: bold;
  }
`;
export const StyledImg = styled.img`
  width: 155px;
  height: 155px;
  background-color: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 40px;
  cursor: pointer;
  padding: 0;
`;
