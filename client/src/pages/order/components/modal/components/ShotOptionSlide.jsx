import { useState, useEffect } from "react";
import { StyleSlide, StyleSlideBox, StyleSlideBoxText } from "../Modal.style";
import { SlideAnimation, Round } from "./SlideAnimation";

function ShotOptionSlide() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [shotCount, setShotCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const SHOT_PRICE = 600; // 샷 하나의 가격

  useEffect(() => {
    setTotalPrice(shotCount * SHOT_PRICE); // 샷 수에 따라 가격 업데이트
  }, [shotCount]); // shotCount가 변경될 때만 실행

  const handleShotButtonClick = () => {
    setIsAnimated(!isAnimated);
    if (!isAnimated) {
      setShowContent(true);
    } else {
      setTimeout(() => setShowContent(false), 1000); // 애니메이션이 완료된 후 숨김
    }
  };

  const increaseShot = () => {
    setShotCount(shotCount + 1);
  };

  const decreaseShot = () => {
    if (shotCount > 0) {
      setShotCount(shotCount - 1);
    }
  };
  return (
    <StyleSlide>
      <StyleSlideBox isSlideOpen={true}>
        <div>
          <StyleSlideBoxText onClick={() => handleShotButtonClick()}>
            <div>
              <span>샷</span>
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
                <div>
                  <span>에스프레소 샷</span>
                  <Round>
                    <div onClick={increaseShot}>+</div>
                    <span>{shotCount}</span>
                    <div onClick={decreaseShot}>-</div>
                  </Round>
                </div>
              )}
            </div>
          </SlideAnimation>
        </div>
      </StyleSlideBox>
    </StyleSlide>
  );
}

export default ShotOptionSlide;
