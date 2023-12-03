import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  margin: 20px 50px 50px;
`;

export const Content = styled.div`
  display: flex;
  border-bottom: 1px solid #dfdfdf;
  padding-left: 20px;
`;

export const Ul = styled.ul`
  display: flex;
  margin-left: 50px;
  font-size: 14px;

  & > li {
    padding-right: 40px;
  }
`;
