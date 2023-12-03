import { useState, useEffect } from "react";
import {
  StyleSlide,
  StyleSlideBox,
  StyleSlideBoxText,
} from "../ModalContents.style";
import SquareButton from "../../../../../components/ui/button/SquareButton";
import { SlideAnimation, SquareButtonBox } from "./SlideAnimation";

import { useDispatch, useSelector } from "react-redux";
import { actionSetDrizzleOption } from "../../../../../redux/action/orderDetailAction";

function DrizzleOptionSlide() {
  const dispatch = useDispatch();
  const selectedDrizzle = useSelector(state => state.orderDetail.drizzle);

  const [isAnimated, setIsAnimated] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const PRICE = 600; // 드리즐 하나의 가격

  useEffect(() => {
    if (selectedDrizzle === "없음") {
      setTotalPrice(0);
    } else if (selectedDrizzle) {
      setTotalPrice(PRICE);
    }
  }, [selectedDrizzle]);
  
  const handleDrizzleButtonClick = (option) => {
    // 옵션이 선택되면 새로운 옵션으로 업데이트
    // 리덕스 보여주기
    dispatch(actionSetDrizzleOption(option));
  };
  const toggleDrizzleOptionSlide = () => {
    // 슬라이드 상태를 토글
    setIsAnimated(!isAnimated);
    setShowContent(!isAnimated);
  };

  return (
    <StyleSlide>
      <StyleSlideBox isSlideOpen={true}>
        <div>
          <StyleSlideBoxText onClick={toggleDrizzleOptionSlide}>
            <div>
              <span>드리즐</span>
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
                  {["없음", "초콜릿", "카라멜"].map((option) => (
                    <SquareButton
                      key={option}
                      text={option}
                      type={selectedDrizzle === option ? "red" : "grey"}
                      onClick={() => handleDrizzleButtonClick(option)}
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

export default DrizzleOptionSlide;
