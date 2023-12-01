import styled from "styled-components";

export const InputCard = styled.div`
  width: 1000px;
  height: 90%;

  background-color: #ffffff;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  text-align: center;

  border-radius: 30px 0px 30px 0px;

  padding-top: 100px;
  padding-bottom: 130px;

  margin-bottom: 50px;

`;

export const InputBox = styled.div`
  width: 705px;
  height: 100px;

  border: 1px solid #878585;

  margin: 4px;

  display: flex;
  align-content: space-between;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  padding-left: 12px;
  padding-right: 12px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-top: 50px;
  margin-bottom: 50px;
`;

export const AuthButton = styled.div`
    width: 100px;
    height: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
    font-weight: bold;

    cursor: pointer;

    &: hover {
      color: red;
    }
`