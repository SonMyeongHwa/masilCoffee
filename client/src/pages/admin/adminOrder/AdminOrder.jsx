import { useState } from "react";
import * as Orders from "./AdminOrder.style";
import AdminSidebar from "../../../components/layout/Sidebar/Sidebar";
import OrderTab from "./components/OrderTab";
import OrderReceipt from "./components/OrderReceipt";
import OrderDone from "./components/OrderComplete";

const Admin = () => {
  const [currTab, setCurrTab] = useState("접수 대기");

  const handleClickTab = (tab) => {
    setCurrTab(tab);
  };

  return (
    <>
      <Orders.Container>
        <AdminSidebar />
        <Orders.Content>
          <OrderTab currTab={currTab} onClick={handleClickTab} />
          {currTab === "접수 대기" ? <OrderReceipt /> : <OrderDone />}
        </Orders.Content>
      </Orders.Container>
    </>
  );
};

export default Admin;
