import React from 'react';
import *as S from "../../style/OrderDetails.style";

function OrderListForm({orders}) {
  return (
    <div>
      {orders.map((order) => {
        return (
          <S.orderUL>
          <S.orderLI>  
            <div>
              <S.OrderDate>{order.date}</S.OrderDate>
              <S.OrderNum>주문번호: {order.orderNumber}</S.OrderNum>
              <S.PackingOption>
                포장 옵션: {order.isPacking ? "전체포장" : "매장식사"}
              </S.PackingOption>
              <span>
                <S.BtnOrderCancel>주문취소</S.BtnOrderCancel>
              </span>
            </div>
            <div>
              {order.items.map((item) => {
                return (
                  <ul>
                    <S.itemUL>
                      <S.ItemName>{item.name}</S.ItemName>
                      <S.ItemOption>{item.isIce ? "ICED" : "HOT"} |</S.ItemOption>
                      <S.ItemOption>{item.cup_size} |</S.ItemOption>
                      <S.ItemOption>시럽: {item.syrup}</S.ItemOption>
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
  )
}

export default OrderListForm
