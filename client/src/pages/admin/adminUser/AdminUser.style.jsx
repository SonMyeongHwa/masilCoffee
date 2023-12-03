import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f9f9f9;
`;

export const Content = styled.div`
  flex: 1;
  margin: 70px 70px 0;
`;

export const TableBox = styled.div`
  background-color: #fff;
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
  transition: background-color 0.3s, opacity 0.3s;

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
      background-color: #ffcfd9;
      color: black;
    `}
`;
