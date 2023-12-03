import { useState, useEffect } from "react";
import { StyleSlide, StyleSlideBox, StyleSlideBoxText } from "../Modal.style";
import SquareButton from "../../../../../components/ui/button/SquareButton";
import { SlideAnimation, SquareButtonBox } from "./SlideAnimation";

function MilkOptionSlide() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [selectedMilk, setSelectedMilk] = useState(""); // 선택된 우유 옵션
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
    setSelectedMilk(option);
    setIsAnimated(!isAnimated);
    if (!isAnimated) {
      setShowContent(true);
    } else {
      setTimeout(() => setShowContent(false), 1000); // 애니메이션이 완료된 후 숨김
    }
  };

  return (
    <StyleSlide>
      <StyleSlideBox isSlideOpen={true}>
        <div>
          <StyleSlideBoxText onClick={() => handleMilkButtonClick()}>
            <div>
              <span>우유</span>
              <span>{totalPrice}원🔽</span>
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
                  <SquareButton
                    text={"없음"}
                    type={"red"}
                    onClick={() => handleMilkButtonClick("없음")}
                  >
                    없음
                  </SquareButton>
                  <SquareButton
                    text={"일반"}
                    type={"grey"}
                    onClick={() => handleMilkButtonClick("일반")}
                  >
                    일반
                  </SquareButton>
                  <SquareButton
                    text={"저지방"}
                    type={"grey"}
                    onClick={() => handleMilkButtonClick("저지방")}
                  >
                    저지방
                  </SquareButton>
                  <SquareButton
                    text={"무지방"}
                    type={"grey"}
                    onClick={() => handleMilkButtonClick("무지방")}
                  >
                    무지방
                  </SquareButton>
                  <SquareButton
                    text={"오트"}
                    type={"grey"}
                    onClick={() => handleMilkButtonClick("오트")}
                  >
                    오트
                  </SquareButton>
                  <SquareButton
                    text={"두유"}
                    type={"grey"}
                    onClick={() => handleMilkButtonClick("두유")}
                  >
                    두유
                  </SquareButton>
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
