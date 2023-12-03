import { useState, useEffect } from "react";
import {
  StyleSlide,
  StyleSlideBox,
  StyleSlideBoxText,
} from "../ModalContents.style";
import { SlideAnimation, Round } from "./SlideAnimation";
import { useDispatch, useSelector } from "react-redux";
import { modifyOption } from "../../../../../redux/action/orderDetailAction";
import SquareButton from "../../../../../components/ui/button/SquareButton";
import { SquareButtonBox } from "./SlideAnimation";

function SelectOption({ optionName }) {
  const dispatch = useDispatch();
  const origin = useSelector(
    (state) => state.orderDetail.orderDetail[optionName]
  );
  const details = useSelector(
    (state) => state.orderDetail.selectedOptions[optionName]
  );
  const [isAnimated, setIsAnimated] = useState(false);
  //   const [vanilla, setVanilla] = useState(0);
  //   const [hazelnut, setHazelnut] = useState(0);
  //   const [caramel, setCaramel] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showContent, setShowContent] = useState(false);

  //   const PRICE = 600; // 샷 하나의 가격

  //   useEffect(() => {
  //     setTotalPrice(vanilla * PRICE + hazelnut * PRICE + caramel * PRICE); // 시럽 수에 따라 가격 업데이트
  //     dispatch(actionSetSyrupsOption({ vanilla, hazelnut, caramel }));
  //   }, [vanilla, hazelnut, caramel, dispatch]);

  const handleAnimationButtonClick = () => {
    setIsAnimated(!isAnimated);
    if (!isAnimated) {
      setShowContent(true);
    } else {
      setTimeout(() => setShowContent(false), 1000); // 애니메이션이 완료된 후 숨김
    }
  };

  const handleChangeOption = (selectedItem) => {
    dispatch(modifyOption(optionName, selectedItem));
  };

  useEffect(() => {
    let rusultPrice = 0;
    console.log("셀렉티드 오리진", origin);
    details.forEach((detail) => {
      rusultPrice +=
        detail.quantity *
        origin.find((item) => item.name === detail.name).price; //오리진으로 가져와진 값에 시간 문자열 이 들어가져있어서 안됐었음....
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
              {showContent && details.length > 0 && (
                <SquareButtonBox>
                  {details.map(({ name, quantity }) => (
                    <SquareButton
                      key={name}
                      text={name}
                      type={quantity === 1 ? "red" : "grey"}
                      onClick={() => handleChangeOption(name)}
                    >
                      {name}
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

export default SelectOption;
