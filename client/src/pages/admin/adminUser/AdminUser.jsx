import React from "react";
import * as Users from "./AdminUser.style";
import AdminSidebar from "../../../components/layout/Sidebar/Sidebar";
import UserSearch from "./components/UserSearch";
import Table from "../../../components/ui/table/Table";

const AdminUser = ({ trData, tdData }) => {
  return (
    <>
      <Users.Container>
        <AdminSidebar />
        <Users.Content>
          <UserSearch />
          <Users.TableBox>
            <Table trData={trData} tdData={tdData} />
          </Users.TableBox>
        </Users.Content>
      </Users.Container>
    </>
  );
};

AdminUser.defaultProps = {
  trData: ["이름", "아이디", "이메일", "전화번호", "닉네임", "등급", "가입일"],
  tdData: [
    ["홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원", "2023.11.12"],
    ["홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원", "2023.11.12"],
    ["홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원", "2023.11.12"],
    ["홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원", "2023.11.12"],
    ["홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원", "2023.11.12"],
    ["홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원", "2023.11.12"],
    ["홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원", "2023.11.12"],
    ["홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원", "2023.11.12"],
    ["홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원", "2023.11.12"],
    ["홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원", "2023.11.12"],
    ["홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원", "2023.11.12"],
  ],
};

export default AdminUser;
