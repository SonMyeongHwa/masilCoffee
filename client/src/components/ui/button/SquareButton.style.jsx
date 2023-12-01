import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 14px;
  white-space: nowrap;

  &.Button_grey {
    background-color: d9d9d9;
    color: #472e27;
    font-weight: 900;
  }
  &.Button_red {
    background-color: #472e27;
    color: white;
    font-weight: 900;
  }
  &:not(:first-child) {
    margin-left: 1rem;
  }
`;
