import { useState, useEffect } from "react";
import { StyleSlide, StyleSlideBox, StyleSlideBoxText } from "../Modal.style";
import SquareButton from "../../../../../components/ui/button/SquareButton";
import { SlideAnimation, SquareButtonBox } from "./SlideAnimation";

function WhippingOptionSlide() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [selectedWhipping, setSelectedWhipping] = useState(""); // 선택된 휘핑 옵션
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
    setSelectedWhipping(option);
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
          <StyleSlideBoxText onClick={() => handleWhippingButtonClick()}>
            <div>
              <span>휘핑</span>
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
                    onClick={() => handleWhippingButtonClick("없음")}
                  >
                    없음
                  </SquareButton>
                  <SquareButton
                    text={"적게"}
                    type={"grey"}
                    onClick={() => handleWhippingButtonClick("적게")}
                  >
                    적게
                  </SquareButton>
                  <SquareButton
                    text={"보통"}
                    type={"grey"}
                    onClick={() => handleWhippingButtonClick("보통")}
                  >
                    보통
                  </SquareButton>
                  <SquareButton
                    text={"많이"}
                    type={"grey"}
                    onClick={() => handleWhippingButtonClick("많이")}
                  >
                    많이
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

export default WhippingOptionSlide;
