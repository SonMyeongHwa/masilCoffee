import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f9f9f9;
`;

export const Content = styled.div`
  flex: 1;
  margin: 70px 70px;
`;

export const NoneTitle = styled.p`
  font-size: 20px;
  margin-top: 100px;
  text-align: center;
  color: #8a8a8a;
`;

export const Pagination = styled.div`
  margin: 38.2px;
  display: flex;
  justify-content: center;
`;

export const PaginationItem = styled.a`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;

  &:hover,
  &.active {
    background-color: #ffcfd9;
  }

  &.clicked {
    background-color: #ffcfd9;
    color: black;
  }
  &:visited {
    background-color: #ffcfd9;
    color: black;
  }
  ${(props) =>
    props.isActive &&
    css`
      /* 현재 페이지에 대한 스타일 */
      background-color: #ffcfd9;
      color: black;
    `}
`;
