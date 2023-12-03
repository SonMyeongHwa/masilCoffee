import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 16.7%;
  background-color: #8e0e28;
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 6.8%;
  box-size: border-box;
  border-bottom: solid 0.8px #650818;
`;

export const OrderCount = styled.p`
  margin: 0;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  background-color: white;
`;

export const LinkBox = styled(Link)`
  color: #f5f5f5;
  font-size: 18px;
  text-decoration: none;
`;
