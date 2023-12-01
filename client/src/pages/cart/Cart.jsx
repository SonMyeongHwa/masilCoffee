import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import OrderList from "./OrderList";
import {
  StyledPayment,
  StyledPaymentcontainer,
  StyledPaymentBox,
  StyledInfoBox,
  StyledOrderList,
  StyledAmountPayment,
  StyledInfoContainer,
  StyledCheck,
  StyledButton,
  StyleTotalText,
} from "./Cart.style";

import { useDispatch, useSelector } from "react-redux";
// import * as orderOptionAction from "../../redux/action/orderOptionAction";
import { addOrder, removeOrder } from "../../redux/action/orderAction";
import { paymentAction } from "../../redux/action/paymentAction";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order);
  const [orderList, setOrderList] = useState([]);
  const [checkedBox, setCheckedBox] = useState(true);

  // 각 주문에 대한 체크 상태를 관리하는 로컬 상태
  const [checkedStates, setCheckedStates] = useState({});
  console.log("체그드스테티드", checkedStates);
  // 로그인 상태에 따라 주문하기 클릭시 로그인 화면으로 라우트 or 결제 진행
  const isLogin = useSelector((state) => state.login.loginState);

  const handleOnCheck = (e) => {
    if (e.target.checked) {
      const newCheckedStates = orders.reduce((acc, order) => {
        acc[order.orderId] = true;
        return acc;
      }, {});
      setCheckedStates(newCheckedStates);
      setOrderList(orders);
    } else {
      setCheckedStates({});
      setOrderList([]);
    }
  };

  const handleOnSelect = (order) => {
    const updatedCheckedStates = {
      ...checkedStates,
      [order.orderId]: !checkedStates[order.orderId],
    };
    setCheckedStates(updatedCheckedStates);

    if (updatedCheckedStates[order.orderId]) {
      setOrderList((orders) => [...orders, order]);
    } else {
      setOrderList((orders) => orders.filter((o) => o.orderId !== order.orderId));
    }
  };

  const handleOnClickToRemove = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      orderList.forEach((order) => dispatch(removeOrder(order.orderId)));
    }
  };

  useEffect(() => {
    // 주문 목록이 변경될 때마다 checkedStates 초기화
    const initialCheckedStates = orders.reduce((acc, order) => {
      acc[order.orderId] = false;
      return acc;
    }, {});
    setCheckedStates(initialCheckedStates);
  }, [orders]);

  return (
    <StyledPaymentcontainer>
      <StyledPaymentBox>
        <h1>장바구니</h1>
        <StyledPayment>
          <StyledInfoContainer>
            <StyledInfoBox>
              <StyledOrderList>
                <StyledCheck>
                  <div>
                    <input onClick={handleOnCheck} type="checkbox" />
                    <h2>전체선택</h2>&nbsp;&nbsp;&nbsp;&nbsp;
                    {!checkedBox && <p>주문하실 메뉴를 선택해주세요</p>}
                  </div>
                  <StyledButton>
                    <Button onClick={() => handleOnClickToRemove()} text={"선택삭제"} type={"grey"} />
                  </StyledButton>{" "}
                </StyledCheck>
                <i></i>
                <OrderList handleOnSelect={handleOnSelect} checkedStates={checkedStates} />
              </StyledOrderList>
              <StyledAmountPayment>
                <div>
                  <StyleTotalText>
                    <h2>총 결제 금액</h2>
                    <h2>{orders.length > 0 ? orders.reduce((acc, order) => acc + order.totalPrice, 0).toLocaleString() : 0}원</h2>
                  </StyleTotalText>

                  <StyledButton>
                    <Button
                      onClick={() => {
                        navigate("/Order");
                      }}
                      text={"메뉴추가"}
                      type={"grey"}
                    />

                    <Button
                      onClick={() => {
                        if (isLogin === false) {
                          if (window.confirm("로그인 상태가 아닙니다. 로그인하여 결제를 진행해주세요.")) {
                            navigate("/Login");
                          }
                          return;
                        }
                        const values = Object.values(checkedStates);
                        const checkValue = values.find((state) => state === true);
                        console.log(checkValue, "체크드박스인ㅇ리턴");
                        if (checkValue === undefined) {
                          setCheckedBox(false);
                          console.log(checkedBox, "체크드박스인리턴");
                        } else {
                          dispatch(paymentAction(orderList));
                          navigate("/Payment");
                        }
                      }}
                      disabled={checkedBox}
                      text={"주문하기"}
                      type={"red"}
                    />
                  </StyledButton>
                </div>
              </StyledAmountPayment>
            </StyledInfoBox>
          </StyledInfoContainer>
        </StyledPayment>
      </StyledPaymentBox>
    </StyledPaymentcontainer>
  );
};

export default Cart;
