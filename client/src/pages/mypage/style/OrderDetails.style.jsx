import styled from "styled-components";
import { media } from "../../../util/mediaQ/media";

export const ListBox = styled.div`
  width: 1176.98px;
  height: 600px;
  overflow: auto;
`;

export const orderUL = styled.ul`
  list-style: none;
  display: flex;
`;

export const itemUL = styled.ul`
  list-style: none;
`;

export const orderLI = styled.li`
  display: flex;
  padding: 24px;

  width: 1089px;
  background: #fff;
`;

export const OrderDate = styled.p`
  font-size: 34px;
  margin-top: 24px;
  font-weight: 600;
`;

export const OrderNum = styled.p`
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const PackingOption = styled.span`
  width: 164px;
  height: 37px;

  background: #ededed;
  font-size: 16px;
  font-weight: 400;
  padding: 9px 16px 9px 16px;

  margin-right: 6px;
`;

export const BtnOrderCancel = styled.button`
  border: 1px solid #e1e1e1;
  height: 37px;

  background: #fff;

  cursor: pointer;

  transition: all 100ms ease-in-out 0ms;

  &:hover {
    border-color: #650818;
    color: #650818;
  }
`;

export const ItemName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1px;
`;
export const ItemOption = styled.span`
  color: #8a8a8a;
  font-size: 20px;
  font-weight: 500;
  margin: 2px;
`;
