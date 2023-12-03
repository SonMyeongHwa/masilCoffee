import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/button/Button";
import {
  StyledPayment,
  StyledPaymentcontainer,
  StyledAction,
  StyledPaymentActionBox,
  StyledPaymentBox,
  StyledInfoBox,
  StyledInfoContainer,
  StyledActionBg,
} from "./PaymentDone.style";

import OderList from "../oderList/OderList";
import { useSelector } from "react-redux";

const PaymentDone = () => {

  const payment = useSelector((state) => state.payment.orders);
  console.log("오더 네임", payment);

  const navigate = useNavigate();
  return (
    <StyledPaymentcontainer>
      <StyledPaymentBox>
        <StyledPaymentActionBox>
          <StyledAction>
            <div>
              <span>STEP1</span>
              <b>주문결제</b>
            </div>
          </StyledAction>
          <span>.....</span>
          <StyledAction>
            <StyledActionBg>
              <span>STEP2</span>
              <b>결제완료</b>
            </StyledActionBg>
          </StyledAction>
        </StyledPaymentActionBox>
        <StyledPayment>
          <StyledInfoContainer>
            <StyledInfoBox>
              <OderList />
            </StyledInfoBox>

            <Button
              onClick={() => navigate("/")}
              text={"홈으로"}
              type={"grey"}
            />

            <Button
              onClick={() => navigate("/MyPage")}
              text={"마이페이지"}
              type={"red"}
            />
          </StyledInfoContainer>
        </StyledPayment>
      </StyledPaymentBox>
    </StyledPaymentcontainer>
  );
};

export default PaymentDone;
