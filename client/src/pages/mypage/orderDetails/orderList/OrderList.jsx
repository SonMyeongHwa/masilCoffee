import React, { useEffect, useState } from "react";
import *as S from "../../style/OrderDetails.style"

import OrderListForm from "./OrderListForm"
import { getPayment, deletePayment } from "../../../../api/payment/payment";


function OrderList() {
  const [orders, setOsers] = useState({ orders: []})
  console.log("state", orders.orders)

  useEffect(() => {
    const axiosFn = async () => {
      const res = await getPayment();
      console.log("res", res)
      setOsers(current => {
        return {
          ...current,
          orders: res
        }
      })
    }

    axiosFn()
  }, [])

  return (
    <S.ListBox>
      <OrderListForm orders={orders.orders} />
    </S.ListBox>
  );
}

export default OrderList;