import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import SquareButton from "../../components/ui/button/SquareButton";
import {
  StyledPayment,
  StyledPaymentcontainer,
  StyledAction,
  StyledPaymentActionBox,
  StyledPaymentBox,
  StyledInfoBox,
  StyledInfo,
  StyledInputBox,
  StyledInfoContainer,
  StyledActionBg,
} from "./Payment.style";
import { useDispatch, useSelector } from "react-redux";
import { postPayment } from "../../api/payment/payment";
import {
  addRequestDeliveryAction,
  actionAddPayment,
} from "../../redux/action/paymentAction";

const Payment = () => {
  // 주문 요청사항 확인 버튼
  const handleOnClickCheck = () => {
    if (!orderRequest.current.value) {
      alert("주문 요청 사항을 입력 해 주세요.");
      orderRequest.current.focus();
    } else {
      window.confirm("주문 요청 사항대로 준비 해 드리겠습니다!");
    }
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const token = useSelector((state) => state.login.token);

  // 수령 방법을 관리하는 상태
  const [delivery, setDelivery] = useState("");
  const orderRequest = useRef(null);

  // 수령 방법 버튼 클릭 핸들러
  const handleDeliveryClick = (method) => {
    setDelivery(method);
  };

  const nickname = useSelector((state) => state.user.nickname);
  const phone = useSelector((state) => state.user.phone);
  const paymentInfo = useSelector((state) => state.payment);
  // console.log("페이먼트 인포의 오더스", paymentInfo.orders);

  const createOrderBody = () => {
    let totalOrder = {
      // ---- 변경될 값들 -----
      orderDetail: [],
      totalPrice: 0, //모든주문에 대한 총 가격
      // ---- 고정된 값들 -----
      status: "주문완료",
      nickname,
      request: orderRequest.current.value,
      packagingOption: delivery,
    };

    paymentInfo.orders.forEach((order) => {
      // 개별 주문 확인 {name, totalPrice(개별가격), id, orderId, shot, syrups ...}
      const selectedOption = [];
      for (const optionName in order) {
        let details = "";

        // Array.isArray(order[optionName]) &&
        // ["바닐라 1", "카라멜 2"].join(" ") => 바닐라 1 카라멜 2
        switch (optionName) {
          case "shot":
            if (order[optionName] && Array.isArray(order[optionName])) {
              details = order[optionName]
                .filter((detail) => detail.quantity > 0)
                .map((detail) => `${detail.name} ${detail.quantity}`)
                .join(", ");
              details && selectedOption.push(`샷: ${details}`); // "샷: 에스프레소 1"
            }
            break;
          case "syrup":
            if (order[optionName] && Array.isArray(order[optionName])) {
              details = order[optionName]
                .filter((detail) => detail.quantity > 0)
                .map((detail) => `${detail.name} ${detail.quantity}`)
                .join(", ");
              details && selectedOption.push(`시럽: ${details}`); // "시럽: 바닐라 1 카라멜 2"
            }

            break;
          case "whipping":
            if (order[optionName] && Array.isArray(order[optionName])) {
              details = order[optionName]
                .filter((detail) => detail.quantity > 0)
                .map((detail) => `${detail.name}`)
                .join(", ");
              details && selectedOption.push(`휘핑: ${details}`); // "휘핑: 적게 1"
            }

            break;
          case "iceAmount":
            if (order[optionName] && Array.isArray(order[optionName])) {
              details = order[optionName]
                .filter((detail) => detail.quantity > 0)
                .map((detail) => `${detail.name}`)
                .join(", ");
              details && selectedOption.push(`얼음: ${details}`);
            }

            break;
          case "drizzle":
            if (order[optionName] && Array.isArray(order[optionName])) {
              details = order[optionName]
                .filter((detail) => detail.quantity > 0)
                .map((detail) => `${detail.name}`)
                .join(", ");
              details && selectedOption.push(`드리즐: ${details}`);
            }

            break;
          case "milk":
            if (order[optionName] && Array.isArray(order[optionName])) {
              details = order[optionName]
                .filter((detail) => detail.quantity > 0)
                .map((detail) => `${detail.name}`)
                .join(", ");
              details && selectedOption.push(`우유: ${details}`);
            }

            break;
          default:
            break;
        }
      }
      const currentOption = {
        name: order.name,
        options: selectedOption.join(" / "),
        price: order.totalPrice,
      };
      totalOrder.orderDetail = [...totalOrder.orderDetail, currentOption];
      totalOrder.totalPrice += order.totalPrice;
    });

    return totalOrder;
  };

  const handleOnClickToPayment = async () => {
    // confirm 대화상자를 표시하고, 사용자의 응답을 확인
    const isConfirmed = window.confirm("정말 결제 하시겠습니까?");
    const paymentBody = createOrderBody(); //이거 하니까 됐음 결제완료!!!

    // 사용자가 '확인'을 누른 경우, PaymentDone 페이지로 이동
    if (isConfirmed) {
      try {
        const newPayment = await postPayment(paymentBody);
        dispatch(actionAddPayment(newPayment));
        console.log("뉴페이먼트", newPayment);
        dispatch(
          addRequestDeliveryAction(orderRequest.current.value, delivery)
        );

        navigate("/PaymentDone", { state: paymentBody.orderDetail });
      } catch (error) {
        alert("결제에 실패하였습니다. 다시 시도 해 주세요.");
        console.log(error.message);
      }
    }
  };

  return (
    <StyledPaymentcontainer>
      <StyledPaymentBox>
        <StyledPaymentActionBox>
          <StyledAction>
            <StyledActionBg>
              <span>STEP1</span>
              <b>주문결제</b>
            </StyledActionBg>
          </StyledAction>
          <span>.....</span>
          <StyledAction>
            <div>
              <span>STEP2</span>
              <b>결제완료</b>
            </div>
          </StyledAction>
        </StyledPaymentActionBox>
        <StyledPayment>
          <StyledInfoContainer>
            <StyledInfoBox>
              <h2>주문자 정보</h2>
              <StyledInfo>
                <StyledInputBox>
                  <h3>수령인</h3>
                  <input type="text" value={nickname} readOnly={true} />
                </StyledInputBox>
              </StyledInfo>
              <StyledInfo>
                <StyledInputBox>
                  <h3>수령방법</h3>
                  <SquareButton
                    text={"방문포장"}
                    type={delivery === "방문포장" ? "red" : "grey"}
                    onClick={() => handleDeliveryClick("방문포장")}
                  />
                  <SquareButton
                    text={"매장식사"}
                    type={delivery === "매장식사" ? "red" : "grey"}
                    onClick={() => handleDeliveryClick("매장식사")}
                  />
                </StyledInputBox>
              </StyledInfo>
              <StyledInfo>
                <StyledInputBox>
                  <h3>전화번호</h3>
                  <input type="text" value={phone} readOnly={true} />
                </StyledInputBox>
              </StyledInfo>
              <StyledInfo>
                <StyledInputBox>
                  <h3>주문 요청사항</h3>
                  <input
                    type="text"
                    placeholder="주문 시 요청사항을 입력하세요"
                    ref={orderRequest}
                  />
                  <SquareButton
                    text={"확인"}
                    type={"red"}
                    onClick={handleOnClickCheck}
                  />
                </StyledInputBox>
              </StyledInfo>
              <StyledInfo>
                <StyledInputBox>
                  <h3>결제수단</h3>
                  <SquareButton text={"신용카드"} type={"red"} />
                </StyledInputBox>
              </StyledInfo>
            </StyledInfoBox>
            <Button
              onClick={handleOnClickToPayment}
              text={"결제하기"}
              type={"red"}
            />
          </StyledInfoContainer>
        </StyledPayment>
      </StyledPaymentBox>
    </StyledPaymentcontainer>
  );
};

export default Payment;
