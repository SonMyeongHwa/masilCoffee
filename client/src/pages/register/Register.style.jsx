import styled from "styled-components";

export const InputCard = styled.div`
  width: 1000px;
  height: auto;

  background-color: #ffffff;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  text-align: center;

  border-radius: 30px 0px 30px 0px;

  padding-top: 300px;
  padding-bottom: 50px;

  margin-bottom: 50px;

  overflow: scroll;
  overflow-x:hidden;

  &::-webkit-scrollbar {
    width: 10px;
    background-color: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 30px;
`;

export const InputBox = styled.div`
  width: 900px;
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
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-top: 50px;
  margin-bottom: 50px;
`;
