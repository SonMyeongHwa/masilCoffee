import styled from "styled-components";

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const ModalBox = styled.div`
  width: 480px;
  background-color: white;
  z-index: 100;

  @media all and (max-width: 767px) {
    width: 80%;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding: 25px 0;
  border-bottom: 1px solid #c2c2c2;

  & > div {
    flex: 1;
    font-size: 22px;
    width: 24px;
    margin-left: 40%;
  }

  & > .cancelIcon {
    width: 80px;
    margin: 0;
    font-size: 32px;
    color: black;
    opacity: 0.8;
`;

export const SubTitle = styled.div`
  margin: 35px 10px 15px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const ReasonWrapper = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #c2c2c2;
`;

export const Reason = styled.div`
  width: 50%;
  height: 60px;
  margin: 0 auto 10px;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 5px;
  border: solid 1px #6a6a6a;
  line-height: 60px;
  text-align: center;
  transition: background-color 0.3s, opacity 0.3s;

  &:hover {
    background-color: #ffcfd9;
  }

  &.clicked {
    background-color: #ffcfd9;
    color: black;
  }
`;

export const CompleteButton = styled.div`
  width: 80%;
  height: 70px;
  background-color: #f55374;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  line-height: 70px;
  margin: 5% auto;
`;
