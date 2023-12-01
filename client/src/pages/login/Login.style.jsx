import styled from "styled-components";

export const InputCard = styled.div`
  width: 1000px;
  height: 703px;

  background-color: #ffffff;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  text-align: center;

  border-radius: 30px 0px 30px 0px;
`;

export const InputBox = styled.div`
  height: 100px;

  border: 1px solid #878585;

  margin: 4px;

  display: flex;
  align-content: space-between;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding-left: 12px;
  padding-right: 12px;
`;

export const ButtonBox = styled.div`
 display: flex;
 flex-direction: row;

 justify-content: center;
 align-items: center;

 margin-top: 180px;
`

export const LoginMessage = styled.div`
  text-align: center;
  width: 100%;
  height: 21px;

  color: red;
`