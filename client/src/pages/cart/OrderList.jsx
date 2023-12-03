import {
  StyledOrderListMenuBox,
  StyledOrderListMenu,
  StyledImg,
  StyledOrderOptionBox,
  StyledOrderOption,
  StyledOrdeName,
  StyledOrderText,
} from "./OrderList.style";

import { useDispatch, useSelector } from "react-redux";

import { updateOrder } from "../../redux/action/orderAction";
import SquareButton from "../../components/ui/button/SquareButton";

const OrderList = ({ handleOnSelect, checkedStates }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order);
  const products = useSelector((state) => state.product.products);

  const handleQuantity = (order, operator) => {
    if (operator === "+") {
      dispatch(
        updateOrder(
          {
            quantity: order.quantity + 1,
            totalPrice:
              (order.totalPrice / order.quantity) * (order.quantity + 1),
          },
          order.orderId
        )
      );
    } else if (operator === "-" && order.quantity > 1) {
      dispatch(
        updateOrder(
          {
            quantity: order.quantity - 1,
            totalPrice:
              (order.totalPrice / order.quantity) * (order.quantity - 1),
          },
          order.orderId
        )
      );
    }
  };
  return (
    <StyledOrderListMenu>
      {orders.length > 0 &&
        orders.map((order) => (
          <StyledOrderListMenuBox key={order.orderId}>
            <StyledOrderOptionBox>
              <StyledOrdeName>
                <input
                  onClick={() => handleOnSelect(order)}
                  checked={checkedStates[order.orderId]}
                  type="checkbox"
                />
                <b>{order.name}</b>
              </StyledOrdeName>
              <StyledOrderOption>
                {order.shot
                  .filter((item) => item.quantity > 0)
                  .map((item) => (
                    <span
                      key={item.name}
                    >{`샷 : ${item.name} ${item.quantity}`}</span>
                  ))}
                {order.syrup
                  .filter((item) => item.quantity > 0)
                  .map((item) => (
                    <span
                      key={item.name}
                    >{`시럽 : ${item.name} ${item.quantity}`}</span>
                  ))}
                {order.whipping
                  .filter((item) => item.quantity > 0)
                  .map((item) => (
                    <span key={item.name}>{`휘핑 : ${item.name}`}</span>
                  ))}
                {order.iceAmount
                  .filter((item) => item.quantity > 0)
                  .map((item) => (
                    <span key={item.name}>{`얼음 : ${item.name}`}</span>
                  ))}
                {order.drizzle
                  .filter((item) => item.quantity > 0)
                  .map((item) => (
                    <span key={item.name}>{`드리즐 : ${item.name}`}</span>
                  ))}
                {order.milk
                  .filter((item) => item.quantity > 0)
                  .map((item) => (
                    <span key={item.name}>{`우유 : ${item.name}`}</span>
                  ))}
              </StyledOrderOption>

              <StyledOrderText>
                <div>
                  <b>수량</b>
                  <SquareButton
                    text="-"
                    type="red"
                    onClick={() => handleQuantity(order, "-")}
                  />
                  <span>{order.quantity}</span>
                  <SquareButton
                    text="+"
                    type="red"
                    onClick={() => handleQuantity(order, "+")}
                  />
                </div>
                <b>총 주문금액</b>
                <span>{order.totalPrice}원</span>
              </StyledOrderText>
            </StyledOrderOptionBox>
            <StyledImg
              src={products.find(({ name }) => name === order.name).image_url}
              alt={order.name}
            />
          </StyledOrderListMenuBox>
        ))}
      <i></i>
    </StyledOrderListMenu>
  );
};

export default OrderList;
