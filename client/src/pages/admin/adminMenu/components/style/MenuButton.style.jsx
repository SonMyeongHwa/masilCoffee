import styled from "styled-components";

export const Box = styled.button`
  &.optionAndNewMenu {
    width: 146px;
    height: 40px;
    background-color: #fc5b5b;
    color: white;
    font-size: 16px;
    text-align: center;
    line-height: center;
    border-radius: 5px;
    border: none;
    margin-left: 10px;
    transition: background-color 0.3s, opacity 0.3s;

    &:hover {
      background-color: #e24242;
    }
  }
`;
