import { useState, useEffect } from "react";
import {
  StyleSlide,
  StyleSlideBox,
  StyleSlideBoxText,
} from "../ModalContents.style";
import SquareButton from "../../../../../components/ui/button/SquareButton";
import { SlideAnimation, SquareButtonBox } from "./SlideAnimation";
import { useDispatch, useSelector } from "react-redux";
import { actionSetWhippingOption } from "../../../../../redux/action/orderDetailAction";

function WhippingOptionSlide() {
  const dispatch = useDispatch();
  const selectedWhipping = useSelector((state) => state.orderDetail.whipping); // 선택된 휘핑 옵션
  const [isAnimated, setIsAnimated] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const PRICE = 600; // 샷 하나의 가격

  useEffect(() => {
    if (selectedWhipping === "없음") {
      setTotalPrice(0);
    } else if (selectedWhipping) {
      setTotalPrice(PRICE);
    }
  }, [selectedWhipping]);

  const handleWhippingButtonClick = (option) => {
    // 옵션이 선택되면 새로운 옵션으로 업데이트
    dispatch(actionSetWhippingOption(option));
  };
  const toggleWhippingOptionSlide = () => {
    // 슬라이드 상태를 토글
    setIsAnimated(!isAnimated);
    setShowContent(!isAnimated);
  };

  return (
    <StyleSlide>
      <StyleSlideBox isSlideOpen={true}>
        <div>
          <StyleSlideBoxText onClick={toggleWhippingOptionSlide}>
            <div>
              <span>휘핑</span>
              <span>{totalPrice}원▼</span>
            </div>
            <i />
          </StyleSlideBoxText>
          <SlideAnimation>
            <div
              className={`slide-panel ${
                isAnimated ? "slide-open" : "slide-close"
              }`}
            >
              {showContent && (
                <SquareButtonBox>
                  {["없음", "적게", "보통", "많이"].map((option) => (
                    <SquareButton
                      key={option}
                      text={option}
                      type={selectedWhipping === option ? "red" : "grey"}
                      onClick={() => handleWhippingButtonClick(option)}
                    >
                      {option}
                    </SquareButton>
                  ))}
                </SquareButtonBox>
              )}
            </div>
          </SlideAnimation>
        </div>
      </StyleSlideBox>
    </StyleSlide>
  );
}

export default WhippingOptionSlide;
