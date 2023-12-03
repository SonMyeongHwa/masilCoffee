import { useState } from "react";
import { StyleSlide, StyleSlideBox, StyleSlideBoxText } from "../Modal.style";
import SquareButton from "../../../../../components/ui/button/SquareButton";
import { SlideAnimation, SquareButtonBox } from "./SlideAnimation";

function IceOptionSlide() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [selectedIceOption, setSelectedIceOption] = useState(""); // 선택된 얼음 옵션
  const [totalPrice] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const handleIceButtonClick = (option) => {
    setSelectedIceOption(option); // 선택된 옵션 업데이트
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
          <StyleSlideBoxText onClick={handleIceButtonClick}>
            <div>
              <span>얼음</span>
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
                    onClick={() => handleIceButtonClick("없음")}
                  >
                    없음
                  </SquareButton>
                  <SquareButton
                    text={"적게"}
                    type={"grey"}
                    onClick={() => handleIceButtonClick("적게")}
                  >
                    적게
                  </SquareButton>
                  <SquareButton
                    text={"보통"}
                    type={"grey"}
                    onClick={() => handleIceButtonClick("보통")}
                  >
                    보통
                  </SquareButton>
                  <SquareButton
                    text={"많이"}
                    type={"grey"}
                    onClick={() => handleIceButtonClick("많이")}
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

export default IceOptionSlide;
