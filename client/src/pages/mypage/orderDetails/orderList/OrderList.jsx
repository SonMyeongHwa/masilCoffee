import React from "react";
import *as S from "../../style/OrderDetails.style"

import OrderListForm from "./OrderListForm"


function OrderList({ orders }) {
  return (
    <S.ListBox>
      <OrderListForm orders={orders}/>
    </S.ListBox>
  );
}

export default OrderList;


OrderListForm.defaultProps = {
  orders: [
    {
      date: "2023.11.16",
      orderNumber: 12045533,
      isPacking: true,
      items: [
        {
          name: "아이스 아메리카노",
          id: 1234,
          isIce: true,
          cup_size: "Tall",
          syrup: "바닐라 시럽 1",
        },

        {
          name: "샤케라또",
          id: 2999,
          isIce: true,
          cup_size: "Large",
          syrup: "none",
        },
        {
          name: "샤케라또",
          id: 2999,
          isIce: true,
          cup_size: "Large",
          syrup: "none",
        },
        {
          name: "샤케라또",
          id: 2999,
          isIce: true,
          cup_size: "Large",
          syrup: "none",
        },
        {
          name: "샤케라또",
          id: 2999,
          isIce: true,
          cup_size: "Large",
          syrup: "none",
        },

      ],
    },

    {
      date: "2023.11.17",
      orderNumber: 12344513,
      isPacking: false,
      items: [
        {
          name: "샤케라또",
          id: 2999,
          isIce: false,
          cup_size: "Small",
          syrup: "none",
        },
      ],
    },
    {
      date: "2023.11.17",
      orderNumber: 12344513,
      isPacking: false,
      items: [
        {
          name: "샤케라또",
          id: 2999,
          isIce: false,
          cup_size: "Small",
          syrup: "none",
        },
      ],
    },
    {
      date: "2023.11.17",
      orderNumber: 12344513,
      isPacking: false,
      items: [
        {
          name: "샤케라또",
          id: 2999,
          isIce: false,
          cup_size: "Small",
          syrup: "none",
        },
      ],
    },
  ],
};
