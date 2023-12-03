import { useState, useEffect } from "react";
import {
  StyleSlide,
  StyleSlideBox,
  StyleSlideBoxText,
} from "../ModalContents.style";
import SquareButton from "../../../../../components/ui/button/SquareButton";
import { SlideAnimation, SquareButtonBox } from "./SlideAnimation";

import { useDispatch, useSelector } from "react-redux";
import { actionSetMilkOption } from "../../../../../redux/action/orderDetailAction";

function MilkOptionSlide() {
  const dispatch = useDispatch();
  const selectedMilk = useSelector((state) => state.orderDetail.milk); // 선택된 우유 옵션

  const [isAnimated, setIsAnimated] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const PRICE = 600; // 우유 옵션 하나의 가격

  useEffect(() => {
    if (selectedMilk === "없음") {
      setTotalPrice(0);
    } else if (selectedMilk) {
      setTotalPrice(PRICE);
    }
  }, [selectedMilk]);

  const handleMilkButtonClick = (option) => {
    // 옵션이 선택되면 새로운 옵션으로 업데이트
    dispatch(actionSetMilkOption(option));
  };

  const toggleMilkOptionSlide = () => {
    // 슬라이드 상태를 토글
    setIsAnimated(!isAnimated);
    setShowContent(!isAnimated);
  };

  return (
    <StyleSlide>
      <StyleSlideBox isSlideOpen={true}>
        <div>
          <StyleSlideBoxText onClick={toggleMilkOptionSlide}>
            <div>
              <span>우유</span>
              <span>{totalPrice}원▼ </span>
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
                  {["없음", "일반", "무지방", "저지방", "오트", "두유"].map(
                    (option) => (
                      <SquareButton
                        key={option}
                        text={option}
                        type={selectedMilk === option ? "red" : "grey"}
                        onClick={() => handleMilkButtonClick(option)}
                      >
                        {option}
                      </SquareButton>
                    )
                  )}
                </SquareButtonBox>
              )}
            </div>
          </SlideAnimation>
        </div>
      </StyleSlideBox>
    </StyleSlide>
  );
}

export default MilkOptionSlide;
