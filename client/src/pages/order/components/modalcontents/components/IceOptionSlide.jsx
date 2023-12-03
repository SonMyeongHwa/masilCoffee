import { useState, useEffect } from "react";
import {
  StyleSlide,
  StyleSlideBox,
  StyleSlideBoxText,
} from "../ModalContents.style";
import SquareButton from "../../../../../components/ui/button/SquareButton";
import { SlideAnimation, SquareButtonBox } from "./SlideAnimation";

import { useDispatch, useSelector } from "react-redux";
import { actionSetIceOption } from "../../../../../redux/action/orderDetailAction";

function IceOptionSlide() {
  const dispatch = useDispatch();
  const selectedIceOption = useSelector((state) => state.orderDetail.ice); // 선택된 얼음 옵션

  const [isAnimated, setIsAnimated] = useState(false);
  const [totalPrice] = useState(0);
  const [showContent, setShowContent] = useState(false);

  // const handleIceButtonClick = (option) => {
  //   // 이미 선택된 옵션을 다시 선택하면 아무런 변경 없음
  //   if (selectedIceOption !== option) {
  //     setSelectedIceOption(option); // 다른 옵션이 선택되면 새로운 옵션으로 업데이트
  //   }
  //   setIsAnimated(!isAnimated); // 슬라이드 상태를 토글
  //   if (!isAnimated) {
  //     setShowContent(true);
  //   } else {
  //     setShowContent(false); // 슬라이드가 닫힐 때 내용을 숨김
  //     // setTimeout(() => setShowContent(false), 1000); // 애니메이션이 완료된 후 숨김
  //   }
  // };

  const handleIceButtonClick = (option) => {
    // 옵션이 선택되면 새로운 옵션으로 업데이트
    dispatch(actionSetIceOption(option));
  };
  const toggleIceOptionSlide = () => {
    // 슬라이드 상태를 토글
    setIsAnimated(!isAnimated);
    setShowContent(!isAnimated);
  };

  return (
    <StyleSlide>
      <StyleSlideBox isSlideOpen={true}>
        <div>
          <StyleSlideBoxText onClick={toggleIceOptionSlide}>
            <div>
              <span>얼음</span>
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
                  {["없음", "적게", "보통", "많이"].map((option) => (
                    <SquareButton
                      key={option}
                      text={option}
                      type={selectedIceOption === option ? "red" : "grey"}
                      onClick={() => handleIceButtonClick(option)}
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

export default IceOptionSlide;
