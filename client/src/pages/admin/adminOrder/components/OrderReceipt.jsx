import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Orders from "./style/OrderDetail.style";
import OrderCancel from "./OrderCancel";
import DateFormat from "../../../../util/DateFormat/DateFormat";
import { updatePayment } from "../../../../api/payment/payment";
import { actionUpdateOrder } from "../../../../redux/action/paymentAction";

const OrderReceipt = ({ data }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const { date, nickname, request, totalPrice, packagingOption, orderDetail, _id } = data;

  const ORDER_STATUS = {
    pending: "pending",
    accepted: "accepted",
    completed: "completed",
  };

  const [orderStatus, setOrderStatus] = useState(ORDER_STATUS.pending);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const handleAccept = () => {
    if (orderStatus === ORDER_STATUS.pending) {
      setOrderStatus(ORDER_STATUS.accepted);
    } else if (orderStatus === ORDER_STATUS.accepted) {
      setOrderStatus(ORDER_STATUS.completed);
      const fn = async () => {
        try {
          const updateStatus = { status: "제조완료" };
          const updatedData = await updatePayment(_id, updateStatus);
          console.log("updatedData", updatedData);
          dispatch(actionUpdateOrder(updatedData));
        } catch (err) {
          console.log("err", err);
        }
      };
      fn();
    }
  };

  return (
    <Orders.Container>
      <Orders.TopBox>
        <Orders.Date>{DateFormat("date", date)}</Orders.Date>
        <Orders.Time>{DateFormat("time", date)}</Orders.Time>
        <Orders.Orderer>주문자 : {nickname}</Orders.Orderer>
        <Orders.Request>요청사항 : {request}</Orders.Request>
      </Orders.TopBox>
      <Orders.Wrapper>
        <Orders.LeftBox>
          <Orders.TotalPrice>
            [메뉴 {orderDetail.length}개] {totalPrice}원
          </Orders.TotalPrice>
          <Orders.Takeout>포장 옵션 : {packagingOption}</Orders.Takeout>
        </Orders.LeftBox>
        <Orders.CenterBox>
          {orderDetail.map((item, i) => {
            return (
              <Orders.ItemBox>
                <Orders.Item>{item.name} 1개</Orders.Item>
                <Orders.ItemOption>{item.options}</Orders.ItemOption>
              </Orders.ItemBox>
            );
          })}
        </Orders.CenterBox>
        <Orders.RightBox>
          {showCancelModal && (
            <OrderCancel
              closeModal={() => {
                setShowCancelModal(!showCancelModal);
              }}
              orderId={_id}
            />
          )}
          <Orders.CancelButton
            onClick={() => {
              setShowCancelModal(!showCancelModal);
            }}
          >
            취소하기
          </Orders.CancelButton>
          <Orders.AcceptButton onClick={handleAccept} className={orderStatus === ORDER_STATUS.accepted ? "accepted" : "not-accepted"}>
            {orderStatus === ORDER_STATUS.accepted ? "완료처리하기" : "접수하기"}
          </Orders.AcceptButton>
        </Orders.RightBox>
      </Orders.Wrapper>
    </Orders.Container>
  );
};

export default OrderReceipt;
