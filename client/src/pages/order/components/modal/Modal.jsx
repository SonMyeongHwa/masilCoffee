import Button from "../../../../components/ui/button/Button";

import { Link } from "react-router-dom";

import {
  StyledModal,
  StyleModalContainer,
  StyleX,
  StyleText,
  StyleImg,
  StyleInfo,
  StyleDisplay,
  StylePaddingSpan,
  StyleQuantity,
  StyleButton,
  StyleXContainer,
} from "./Modal.style";

import ShotOptionSlide from "./components/ShotOptionSlide";
import SyrupOptionSlide from "./components/SyrupOptionSlide";
import IceOptionSlide from "./components/IceOptionSlide";
import WhippingOptionSlide from "./components/Whipping";
import MilkOptionSlide from "./components/MilkOptionSlide";

const Modal = ({ openModal, closeModal }) => {
  return (
    <StyledModal>
      <StyleModalContainer>
        <StyleXContainer>
          <StyleX onClick={closeModal}>X</StyleX>
        </StyleXContainer>
        <StyleText>
          <StyleImg></StyleImg>
          <StyleInfo>
            <span>에스프레소</span>
            <StylePaddingSpan>가격</StylePaddingSpan>
            <StyleQuantity>
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </StyleQuantity>
            <StyleDisplay>
              <span>HOT</span>
              <span>Tall</span>
            </StyleDisplay>
          </StyleInfo>
        </StyleText>
        <ShotOptionSlide />
        <SyrupOptionSlide />
        <IceOptionSlide />
        <WhippingOptionSlide />
        <MilkOptionSlide />
        <StyleButton>
          <Link to="/Cart">
            <Button type="grey" text={"장바구니"} />
          </Link>
          <Link to="/Payment">
            <Button type="red" text={"결제하기"} />
          </Link>
        </StyleButton>
      </StyleModalContainer>
    </StyledModal>
  );
};
export default Modal;
