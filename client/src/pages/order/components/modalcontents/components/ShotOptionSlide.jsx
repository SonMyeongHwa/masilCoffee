import { useState, useEffect } from "react";
import {
  StyleSlide,
  StyleSlideBox,
  StyleSlideBoxText,
} from "../ModalContents.style";
import { SlideAnimation, Round } from "./SlideAnimation";
import { useDispatch, useSelector } from "react-redux";
import { actionSetShotOption } from "../../../../../redux/action/orderDetailAction";

function ShotOptionSlide() {
  const dispatch = useDispatch();
  const shotCount = useSelector((state) => state.orderDetail.shot);
  const [isAnimated, setIsAnimated] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const SHOT_PRICE = 600; // 샷 하나의 가격

  const handleShotButtonClick = () => {
    setIsAnimated(!isAnimated);
    if (!isAnimated) {
      setShowContent(true);
    } else {
      setTimeout(() => setShowContent(false), 1000); // 애니메이션이 완료된 후 숨김
    }
  };

  const increaseShot = () => {
    dispatch(actionSetShotOption(shotCount + 1));
  };

  const decreaseShot = () => {
    if (shotCount > 0) {
      dispatch(actionSetShotOption(shotCount - 1));
    }
  };

  useEffect(() => {
    setTotalPrice(shotCount * SHOT_PRICE); // 샷 수에 따라 가격 업데이트
  }, [shotCount]); // shotCount가 변경될 때만 실행

  return (
    <StyleSlide>
      <StyleSlideBox isSlideOpen={true}>
        <div>
          <StyleSlideBoxText onClick={() => handleShotButtonClick()}>
            <div>
              <span>샷</span>
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
