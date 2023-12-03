import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50px;
  padding: 12px 35px;
  font-size: 15px;
  margin: 0 15px;
  white-space: nowrap;

  &.Button_grey {
    background-color: #ececec;
    color: #472e27 ;
    font-weight: bold;
  }
  &.Button_red {
    background-color: #472e27 ;
    color: white;
    font-weight: bold;
  }
  &.Button_white {
    background-color: #f5f5f5;
    color: #191414;
    font-weight: bold;
  }
  &:not(:first-child) {
    margin-left: 1rem;
  }
`;
