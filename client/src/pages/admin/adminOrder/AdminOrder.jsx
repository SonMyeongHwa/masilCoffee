import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Orders from "./AdminOrder.style";
import AdminSidebar from "../../../components/layout/Sidebar/Sidebar";
import OrderTab from "./components/OrderTab";
import OrderReceipt from "./components/OrderReceipt";
import OrderDone from "./components/OrderComplete";
import { getAllPayment } from "../../../api/payment/payment";
import { actionGetAllOrders } from "../../../redux/action/paymentAction";
import { usePagination } from "../../../hooks/usePagination";
import sliceTen from "../../../util/forPagenation/sliceTen";

const Admin = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const receiptedOrder = useSelector((state) => state.payment.receipted);
  const completedOrder = useSelector((state) => state.payment.completed);
  const [currTab, setCurrTab] = useState("접수 대기");
  const [page, setPage] = useState(1);

  const pageConst = {
    totalCount:
      currTab === "접수 대기" ? receiptedOrder.length : completedOrder.length,
    pageSize: 5,
    siblingCount: 1,
    currentPage: page,
  };

  const pageArr = usePagination(pageConst);

  const slicedData = sliceTen({
    currentPage: pageConst.currentPage,
    pageSize: pageConst.pageSize,
    initDataSet: currTab === "접수 대기" ? receiptedOrder : completedOrder,
  });

  const handleClick = (e) => {
    setPage(parseInt(e.target.name, 10));
  };

  useEffect(() => {
    const fn = async () => {
      try {
        const orders = await getAllPayment();
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
              slicedData.map((data) => <OrderReceipt data={data} />)
            ) : (
              <Orders.NoneTitle>주문 내역이 없습니다.</Orders.NoneTitle>
            )
          ) : completedOrder.length > 0 ? (
            completedOrder.map((data) => <OrderDone data={data} />)
          ) : (
            <Orders.NoneTitle>주문 내역이 없습니다.</Orders.NoneTitle>
          )}
          <Orders.Pagination>
            <Orders.PaginationItem href="#">&laquo;</Orders.PaginationItem>
            <div>
              {pageArr.map((arr) => {
                return (
                  <Orders.PaginationItem
                    name={arr}
                    href="#"
                    onClick={handleClick}
                  >
                    {arr}
                  </Orders.PaginationItem>
                );
              })}
            </div>
            <Orders.PaginationItem href="#">&raquo;</Orders.PaginationItem>
          </Orders.Pagination>
        </Orders.Content>
      </Orders.Container>
    </>
  );
};

export default Admin;
