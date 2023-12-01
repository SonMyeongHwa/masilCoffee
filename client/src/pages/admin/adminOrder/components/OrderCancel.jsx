import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Cancel from "./style/OrderCancel.style";
import { TiDelete } from "react-icons/ti";
import { updatePayment } from "../../../../api/payment/payment";
import { actionUpdateOrder } from "../../../../redux/action/paymentAction";

const OrderCancel = ({ closeModal, orderId }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const [selectedReason, setSelectedReason] = useState("");
  const cancelReasons = ["고객 요청", "재료 소진", "가게 사정"];

  const handleClick = (reason) => {
    setSelectedReason(reason);
  };

  const handleCancelSubmit = () => {
    const fn = async () => {
      try {
        const updateStatus = { status: selectedReason };
        const updatedData = await updatePayment(orderId, updateStatus);
        dispatch(actionUpdateOrder(updatedData));
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
    closeModal();
  };

  return (
    <Cancel.ModalBackground>
      <Cancel.ModalBox>
        <Cancel.Title>
          <div>주문취소</div>
          <TiDelete className="cancelIcon" onClick={closeModal} />
        </Cancel.Title>
        <Cancel.SubTitle>주문 취소 사유를 선택하세요.</Cancel.SubTitle>
        <Cancel.ReasonWrapper>
          {cancelReasons.map((reason, i) => {
            return (
              <Cancel.Reason key={reason + i} className={selectedReason === reason ? "clicked" : ""} onClick={() => handleClick(reason)}>
                {reason}
              </Cancel.Reason>
            );
          })}
        </Cancel.ReasonWrapper>
        <Cancel.CompleteButton onClick={handleCancelSubmit}>취소 완료</Cancel.CompleteButton>
      </Cancel.ModalBox>
    </Cancel.ModalBackground>
  );
};

export default OrderCancel;
