import styled from "styled-components";
import { MdAddShoppingCart } from "react-icons/md";
import backgroundColor from "../../../util/BackgoundColor";
import { txt_color } from "../../../type/color_type";
import IncludeRedPage from "../../../util/IncludeRedPage";
import includeCianPage from "../../../util/includeCianPage";
import { LuMoveUp } from "react-icons/lu";
import { media } from "../../../util/mediaQ/media";

import { HiArrowUp } from "react-icons/hi";
import { SlBasket } from "react-icons/sl";

export const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  position: fixed;
  bottom: 40px;
  right: 60px;

  cursor: pointer;

  ${media.medium`
    display: none;
  `}
  ${media.mini`
    display: none;
  `}
`;

export const ControllIcon = styled(MdAddShoppingCart)`
  width: 80%;
  height: 80%;
  border-radius: 100px;
  background: ${(props) => backgroundColor(props.location)};
  padding: 12px;
  color: ${(props) => (IncludeRedPage(props.location) ? txt_color.main_color : txt_color.sub_color)};
`;
export const ControllUp = styled(HiArrowUp)`
  width: 80%;
  height: 80%;
  border-radius: 100px;
  background: ${(props) => backgroundColor(props.location)};
  padding: 12px;
  color: ${(props) => (IncludeRedPage(props.location) ? txt_color.main_color : txt_color.sub_color)};
`;

export const CartCount = styled.p`
  font-size: 18px;
  font-weight: bold;
  background-color: white;
  color: #472e27;
  width: 26px;
  border-radius: 50px;
  text-align: center;
  position: absolute;
  top: 40px;
  left: 30px;
  background-color: #f5f5f5;
`;
