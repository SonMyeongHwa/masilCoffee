import React, { useState, useEffect, useRef } from "react";
import Button from "../../../../components/ui/button/SquareButton";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setInitialOption } from "../../../../redux/action/orderDetailAction";
import { addOrder } from "../../../../redux/action/orderAction";
import { paymentAction } from "../../../../redux/action/paymentAction";

import {
  StyleText,
  StyleImg,
  StyleInfo,
  StyleDisplay,
  StylePaddingSpan,
  StyleQuantity,
  StyleButton,
  StyledTotalPrice,
  StyleSlideContanier,
} from "./ModalContents.style";

import QuantityOption from "./components/QuantityOption";
import SelectOption from "./components/SelectOption";

// import ShotOptionSlide from "./components/ShotOptionSlide";
// import SyrupOptionSlide from "./components/SyrupOptionSlide";
// import IceOptionSlide from "./components/IceOptionSlide";
// import WhippingOptionSlide from "./components/Whipping";
// import DrizzleOptionSlide from "./components/Drizzle";

// import MilkOptionSlide from "./components/MilkOptionSlide";

const ModalContents = ({ data }) => {
  const navigate = useNavigate();
  // 로그인 정보 가져오기
  const isLogin = useSelector((state) => state.login.loginState);

  // 리덕스 가져오기
  const dispatch = useDispatch();
  const options = useSelector((state) => state.orderDetail);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(data.price);

  const handleIncreaseOnClick = () => {
    setQuantity((old) => old + 1);
  };
  const handleDecreaseOnClick = () => {
    if (quantity > 1) {
      setQuantity((old) => old - 1);
    }
  };

  const handleSetResultOrder = (route, action) => {
    if (isLogin === false && route === "/Payment") {
      if (
        window.confirm(
          "로그인 상태가 아닙니다. 로그인하여 결제를 진행해주세요."
        )
      ) {
        navigate("/Login");
      }
      return;
    }
    dispatch(
      action({
        ...options.selectedOptions,
        orderId: new Date(),
        name: data.name,
        id: data.id,
        totalPrice,
        quantity,
      })
    );
    navigate(route);
  };

  useEffect(() => {
    dispatch(setInitialOption());

    // 모달 콘텐츠가 닫힐 때 실행되는 함수(클리어펑션)
    return () => dispatch(setInitialOption());
  }, []);

  // 임시 totalPrice 계산 함수
  useEffect(() => {
    let resultPrice = 0;
    for (const optionName in options.selectedOptions) {
      //여기 수정하니까 됐음 배열안에 무언가 안됐는데 찾아보자
      if (Array.isArray(options.orderDetail[optionName])) {
        for (const detail of options.selectedOptions[optionName]) {
          const originPrice = options.orderDetail[optionName].find(
            (item) => item.name === detail.name
          ).price;
          resultPrice += originPrice * detail.quantity;
        }
      } else {
        console.error(`에러`);
      }
    }

    setTotalPrice(() => (data.price + resultPrice) * quantity);
  }, [options, quantity]);

  return (
    <>
      <StyleText>
        <StyleImg src={data.image_url} alt={data.name}></StyleImg>
        <StyleInfo>
          <span>{data.name}</span>
          <StylePaddingSpan>{quantity * data.price}</StylePaddingSpan>
          <StyleQuantity>
            <button onClick={handleDecreaseOnClick}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncreaseOnClick}>+</button>
          </StyleQuantity>
          <StyleDisplay>
            <span>{data.temp}</span>
            <span>{data.size}</span>
          </StyleDisplay>
        </StyleInfo>
      </StyleText>
      <StyleSlideContanier>
        {Object.keys(options.selectedOptions).length > 0 &&
          Object.keys(options.selectedOptions).map((optionName) => {
            if (optionName === "shot" || optionName === "syrup") {
              return (
                <QuantityOption key={optionName} optionName={optionName} />
              );
            } else if (
              optionName === "milk" ||
              optionName === "iceAmount" ||
              optionName === "whipping" ||
              optionName === "drizzle"
            ) {
              return <SelectOption key={optionName} optionName={optionName} />;
            }
          })}
        <StyledTotalPrice>
          <b>총가격 : {totalPrice}원 </b>
        </StyledTotalPrice>
      </StyleSlideContanier>

      <StyleButton>
        <Button
          onClick={() => handleSetResultOrder("/Cart", addOrder)}
          type="grey"
          text={"장바구니"}
        />
        <Button
          onClick={() => handleSetResultOrder("/Payment", paymentAction)}
          type="red"
          text={"결제하기"}
        />
      </StyleButton>
    </>
  );
};
export default ModalContents;
