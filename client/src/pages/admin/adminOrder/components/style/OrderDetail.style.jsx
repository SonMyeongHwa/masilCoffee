import styled, { css } from "styled-components";

// ----------------------=-  OrderReceipt css  ----------------------=-

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  background-color: white;
`;

export const DisabledOverlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

export const TopBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  width: 100%;
  height: 100%;
  background-color: #f4dfdf;
  line-height: 30px;
`;

export const Date = styled.div`
  margin: 0 10px 0 40px;
  font-size: 18px;
  font-weight: 600;
`;

export const Time = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

export const Orderer = styled.div`
  margin-left: 30px;
  font-size: 16px;
  font-weight: 700;
`;

export const Request = styled.div`
  margin: 0 8.5% 0 30px;
  font-size: 16px;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  display: flex;

  @media all and (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const LeftBox = styled.div`
  width: 18%;
  border-right: solid 2px #ededed;

  @media all and (max-width: 1023px) {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    border-bottom: solid 2px #ededed;
    border-right: none;
    padding-bottom: 20px;
  }
`;

export const TotalPrice = styled.div`
  margin: 50px 0 17px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;

  @media all and (max-width: 1023px) {
    margin: 20px 10px 0;
  }
`;

export const Takeout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 60%;
  height: 30%;
  margin: 0 auto;
  font-size: 16px;
  background-color: #ededed;

  @media all and (max-width: 1023px) {
    width: 200px;
    height: 30px;
    margin: 20px 10px 0 0;
  }
`;

export const CenterBox = styled.div`
  width: 58%;

  @media all and (max-width: 1023px) {
    width: 100%;
  }
`;

export const ItemBox = styled.div`
  margin: 18px 8% 25px 8%;
`;

export const Item = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ItemOption = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  color: #8a8a8a;
`;

export const RightBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 40px 0;

  @media all and (max-width: 1023px) {
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
`;

const mediaQueryForTabletButtons = css`
  @media all and (max-width: 1023px) {
    width: 180px;
    height: 50px;
    line-height: 40px;
    margin: 0 5px 10px 5px;
  }
`;

export const CancelButton = styled.button`
  width: 120px;
  height: 132px;

  border: solid 2px #e1e1e1;
  font-size: 18px;
  font-weight: bold;
  line-height: 132px;
  text-align: center;
  margin-right: 5px;

  ${mediaQueryForTabletButtons}
`;

export const AcceptButton = styled.button`
  width: 120px;
  height: 132px;
  margin-left: 5px;
  font-size: 18px;
  font-weight: bold;
  line-height: 132px;
  text-align: center;
  border: none;
  padding: 0;
  transition: background-color 0.3s, opacity 0.3s;

  &.accepted {
    color: #474747;
    border: solid 2px #ea1d47;
    background-color: white;
  }

  &.not-accepted {
    color: white;
    background-color: #ea1d47;
  }

  ${mediaQueryForTabletButtons}
`;

// ------------------------  OrderDone css  ------------------------

export const Done = styled.div`
  width: 120px;
  height: 132px;
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
  line-height: 132px;
  text-align: center;
  color: #c2c2c2;
  border: solid 2px #d7d7d7;
  background-color: #f6f6f6;
`;

export const Cancel = styled.div`
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
  color: #262626;
  font-weight: bold;
  & > div {
    margin-top: 10px;
    font-size: 16px;
    background-color: #d7d7d7;
    padding: 10px 0;
  }
`;
