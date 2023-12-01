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

  position: fixed;
  bottom: 20px;
  right: 20px;

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
  color: ${(props) =>
    IncludeRedPage(props.location)
      ? txt_color.main_color
      : txt_color.sub_color};
`;
export const ControllUp = styled(HiArrowUp)`
  width: 80%;
  height: 80%;
  border-radius: 100px;
  background: ${(props) => backgroundColor(props.location)};
  padding: 12px;
  color: ${(props) =>
    IncludeRedPage(props.location)
      ? txt_color.main_color
      : txt_color.sub_color};
`;
