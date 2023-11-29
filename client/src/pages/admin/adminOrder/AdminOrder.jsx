import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Orders from "./AdminOrder.style";
import AdminSidebar from "../../../components/layout/Sidebar/Sidebar";
import OrderTab from "./components/OrderTab";
import OrderReceipt from "./components/OrderReceipt";
import OrderDone from "./components/OrderComplete";
import { getAllPayment } from "../../../api/payment/payment";
import { actionGetAllOrders } from "../../../redux/action/paymentAction";

const Admin = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const receiptedOrder = useSelector((state) => state.payment.receipted);
  const completedOrder = useSelector((state) => state.payment.completed);
  const [currTab, setCurrTab] = useState("접수 대기");
  console.log(completedOrder, "000");
  

  useEffect(() => {
    const fn = async () => {
      try {
        const orders = await getAllPayment(token);
        dispatch(actionGetAllOrders(orders));
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
  }, []);

  const handleClickTab = (tab) => {
    setCurrTab(tab);
  };

  return (
    <>
      <Orders.Container>
        <AdminSidebar />
        <Orders.Content>
          <OrderTab currTab={currTab} onClick={handleClickTab} />
          {currTab === "접수 대기" ? (
            receiptedOrder.length > 0 ? (
              receiptedOrder.map((data) => <OrderReceipt data={data} />)
            ) : (
              <Orders.NoneTitle>주문 내역이 없습니다.</Orders.NoneTitle>
            )
          ) : completedOrder.length > 0 ? (
            completedOrder.map((data) => <OrderDone data={data} />)
          ) : (
            <Orders.NoneTitle>주문 내역이 없습니다.</Orders.NoneTitle>
          )}
        </Orders.Content>
      </Orders.Container>
    </>
  );
};

export default Admin;
