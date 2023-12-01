import React from "react";
import * as S from "../../style/OrderDetails.style";
import DateFormat from "../../../../util/DateFormat/DateFormat";

function OrderListForm({ orders }) {

  return (
    <div>
      {orders.map((order) => {
        return (
          <S.orderUL>
            <S.orderLI>
              <div>
                <S.OrderDate>
                  {DateFormat("dateTime", order.createdAt)}
                </S.OrderDate>
                <S.OrderNum>주문번호: {order._id}</S.OrderNum>
                <S.PackingOption>
                  포장 옵션: {order.packagingOption}
                </S.PackingOption>
              </div>
              <div>
                {order.orderDetail.map((item) => {
                  return (
                    <ul>
                      <S.itemUL>
                        <S.ItemName>{item.name}</S.ItemName>
                        <S.ItemOption>{item.options}</S.ItemOption>
                      </S.itemUL>
                    </ul>
                  );
                })}
              </div>
            </S.orderLI>
          </S.orderUL>
        );
      })}
    </div>
  );
}

export default OrderListForm;
