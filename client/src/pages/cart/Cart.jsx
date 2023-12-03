import { Link } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import {
  StyledPayment,
  StyledPaymentcontainer,
  StyledPaymentBox,
  StyledInfoBox,
  StyledOrderList,
  StyledOrderListMenu,
  StyledOrderListMenuBox,
  StyledAmountPayment,
  StyledInfoContainer,
  StyledCheck,
} from "./Cart.style";

const Cart = () => {
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
                    {" "}
                    <input type="checkbox" />
                    <h2>전체선택</h2>
                  </div>
                  <Button text={"선택삭제"} type={"grey"} />
                </StyledCheck>
                <i></i>
                <StyledOrderListMenu>
                  <StyledOrderListMenuBox>
                    <div>
                      <div>
                        <input type="checkbox" />
                        <b>에스프레소</b>
                      </div>
                      <span>
                        샷1,시럽없음,얼음없음,휘핑없음,드리즐없음,우유없음
                      </span>
                      <div>
                        <b>수량</b>
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                        <b>총 주문금액</b>
                        <b>4,500원</b>
                      </div>
                    </div>
                    <div>이미지</div>
                  </StyledOrderListMenuBox>
                </StyledOrderListMenu>
                <i></i>
              </StyledOrderList>
              <StyledAmountPayment>
                <div>
                  <h2>총 결제 금액</h2>
                  <h2>9,000원</h2>
                  <Link to="/Order">
                    <Button text={"메뉴추가"} type={"grey"} />
                  </Link>
                  <Link to="/Payment">
                    <Button text={"주문하기"} type={"red"} />
                  </Link>
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
