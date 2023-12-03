import styled from "styled-components";
import { ROUTES } from "../../../router/Routes";


export const LeftSide = styled.span`
  margin-left: 62px;
  display: flex;
`;

export const RightSide = styled.span`
  margin-right: 62px;
  display: flex;
`;

export const Header = styled.header`

  height: 88px;

  background: ${props => RedColorPage.includes(props.location)  ? "#F5F5F5" : "#8e0e28"};
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

export const HeaderImg = styled.img`
  width: 300px;
  cursor: pointer;
`

const RedColorPage = [
  ROUTES.RECIPE.path,
  ROUTES.ORDER.path,
  ROUTES.PAYMENT.path,
  ROUTES.PAYMENTDONE.path,
  ROUTES.RECIPEVIEW.path,
  ROUTES.RECIPEWRITE.path,
  ROUTES.RECIPE.path,
];

