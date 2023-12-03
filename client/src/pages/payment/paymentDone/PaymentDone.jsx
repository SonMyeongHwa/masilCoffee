import { Link } from "react-router-dom";
import Button from "../../../components/ui/button/Button";
import {
  StyledPayment,
  StyledPaymentcontainer,
  StyledAction,
  StyledPaymentActionBox,
  StyledPaymentBox,
  StyledInfoBox,
  StyledOrderList,
  StyledOrderListMenu,
  StyledOrderListMenuBox,
  StyledAmountPayment,
  StyledInfoContainer,
  StyledActionBg,
} from "./PaymentDone.style";

const PaymentDone = () => {
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
              <StyledOrderList>
                <h2>주문내역</h2>
                <i></i>
                <StyledOrderListMenu>
                  <StyledOrderListMenuBox>
                    <div>
                      <b>에스프레소</b>
                      <span>샷1</span>
                    </div>
                    <div>2잔</div>
                    <div>9,000원</div>
                  </StyledOrderListMenuBox>
                  <i></i>
                </StyledOrderListMenu>
              </StyledOrderList>
              <StyledAmountPayment>
                <div>
                  <h2>총 결제 금액</h2>
                  <h2>9,000원</h2>
                </div>
                <i></i>
              </StyledAmountPayment>
            </StyledInfoBox>
            <Link to="/">
              <Button text={"홈으로"} type={"grey"} />
            </Link>
            <Link to="/Cart">
              <Button text={"마이페이지"} type={"red"} />
            </Link>
          </StyledInfoContainer>
        </StyledPayment>
      </StyledPaymentBox>
    </StyledPaymentcontainer>
  );
};

export default PaymentDone;
