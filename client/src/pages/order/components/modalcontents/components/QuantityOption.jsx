import { useState, useEffect } from "react";
import {
  StyleSlide,
  StyleSlideBox,
  StyleSlideBoxText,
} from "../ModalContents.style";
import { SlideAnimation, Round } from "./SlideAnimation";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseOption,
  decreaseOption,
} from "../../../../../redux/action/orderDetailAction";

function QuantityOption({ optionName }) {
  const dispatch = useDispatch();

  const origin = useSelector(
    (state) => state.orderDetail.orderDetail[optionName]
  );
  const details = useSelector(
    (state) => state.orderDetail.selectedOptions[optionName]
  );
  const [isAnimated, setIsAnimated] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const handleAnimationButtonClick = () => {
    setIsAnimated(!isAnimated);
    if (!isAnimated) {
      setShowContent(true);
    } else {
      setTimeout(() => setShowContent(false), 1000); // 애니메이션이 완료된 후 숨김
    }
  };

  const handleIncreaseOption = (itemName) => {
    dispatch(increaseOption(optionName, itemName));
  };

  const handleDecreaseOption = (itemName) => {
    dispatch(decreaseOption(optionName, itemName));
  };

  useEffect(() => {
    let rusultPrice = 0;
    // console.log(details);
    // console.log("오리진", origin);
    details.forEach((detail) => {
      rusultPrice +=
        detail.quantity *
        origin.find((item) => item.name === detail.name).price;
    });
    setTotalPrice(rusultPrice);
  }, [details]);

  return (
    <StyleSlide>
      <StyleSlideBox isSlideOpen={true}>
        <div>
          <StyleSlideBoxText onClick={handleAnimationButtonClick}>
            <div>
              <span>{optionName}</span>
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
              {showContent &&
                details.length > 0 &&
                details.map((detail) => (
                  <div key={detail.name}>
                    <span>{detail.name}</span>
                    <Round>
                      <div onClick={() => handleDecreaseOption(detail.name)}>
                        -
                      </div>
                      <span>{detail.quantity}</span>
                      <div onClick={() => handleIncreaseOption(detail.name)}>
                        +
                      </div>
                    </Round>
                  </div>
                ))}
            </div>
          </SlideAnimation>
        </div>
      </StyleSlideBox>
    </StyleSlide>
  );
}

export default QuantityOption;
