import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f9f9f9;
`;

export const Content = styled.div`
  flex: 1;
  margin: 70px 70px;
  background-color: white;
  border-radius: 3px;
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const ButtonWrapper = styled.div`
  margin: 40px 40px 0 0;
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

  &:hover {
    background-color: #ffcfd9;
  }

  &.clicked {
    background-color: #ffcfd9;
    color: black;
  }
`;
