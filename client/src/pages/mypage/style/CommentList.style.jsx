import styled from "styled-components";
import { media } from "../../../util/mediaQ/media";

export const ListTag = styled.li`
  display: flex;
  width: 987.093px;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;

  font-size: 24px;
  font-weight: 400;

  border-bottom: 1px solid;
`;

export const TextBox = styled.h3`
  font-size: 24px;
  text-align: center;
  font-weight: 400;
  justify-content: center;
  align-content: center;
  align-item: center;
`;

export const Paginamtion = styled.div`
  margin: 38.2px;
  display: flex;
  justify-content: center;
`;

export const PaginationItem = styled.a`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
`;
