import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../router/Routes";

import Contents from "../../../../components/ui/contents/Contents";
import Card from "../../../../components/ui/card/Card";
import { InputCard } from "../../style/InputCard";
import { BtnConfirm } from "../../style/BtnConfirm";
import { ButtonBox } from "../../style/ButtonBox";
import styled from "styled-components";

import UserInfoForm from "./UserInfoForm";

function UserInfoView({ userEmail, originInfo }) {
  const { name, nickname, phone } = originInfo;

  const InputInfo = [
    {
      name: "이름",
      type: "text",
      id: "change_name",
      placeholder: "변경할 이름을 입력해주세요.",
      value: name,
    },
    {
      name: "닉네임",
      type: "text",
      id: "change_nkname",
      placeholder: "변경할 닉네임을 입력해주세요.",
      double: true,
      value: nickname,
    },
    {
      name: "전화번호",
      type: "tel",
      id: "change_tel",
      placeholder: "변경할 전화번호를 입력해주세요.",
      value: phone,
    },
  ];

  const nav = useNavigate();

  const navConfirmPost = () => {
    nav(`${ROUTES.CONFIRMPASSWORD.path}/post`);
  };
  const navConfirmDel = () => {
    nav(`${ROUTES.CONFIRMPASSWORD.path}/del`);
  };

  return (
    <div>
      <Contents>
        <Card>
          <InputCard>
            <h3>회원 정보 변경</h3>
            <UserInfoForm InputInfo={InputInfo} email={userEmail} />
            <ButtonBox>
              <DeleteBtn onClick={navConfirmDel}>회원탈퇴</DeleteBtn>
              <BtnConfirm onClick={navConfirmPost}>회원정보 변경</BtnConfirm>
            </ButtonBox>
          </InputCard>
        </Card>
      </Contents>
    </div>
  );
}

export default UserInfoView;

//임시 회원삭제 컴포넌트 styled

const DeleteBtn = styled.button`
  width: 123px;
  height: 42px;

  border-radius: 20px;
  background: #d9d9d9;
  color: #8e0e28;

  margin: 4px;

  border: none;

  cursor: pointer;

  &:hover {
    background: #878585;
  }
`;
