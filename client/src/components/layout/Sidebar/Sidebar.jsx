import * as Sidebar from "./Sidebar.style";
import { useSelector } from "react-redux";

const AdminSidebar = () => {
  const receiptedOrder = useSelector((state) => state.payment.receipted);
  const orderCount = receiptedOrder.length;

  return (
    <Sidebar.Container>
      <Sidebar.Category>
        <Sidebar.LinkBox to="/admin/order">주문내역</Sidebar.LinkBox>
        <Sidebar.OrderCount>{orderCount}</Sidebar.OrderCount>
      </Sidebar.Category>
      <Sidebar.Category>
        <Sidebar.LinkBox to="/admin/menu">메뉴관리</Sidebar.LinkBox>
      </Sidebar.Category>
      <Sidebar.Category>
        <Sidebar.LinkBox to="/admin/user">회원관리</Sidebar.LinkBox>
      </Sidebar.Category>
    </Sidebar.Container>
  );
};

export default AdminSidebar;
