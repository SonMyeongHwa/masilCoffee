import React, { useRef } from "react";
import Contents from "../../../../components/ui/contents/Contents";
import Card from "../../../../components/ui/card/Card";

import { InputCard } from "../../style/InputCard";
import { BtnConfirm } from "../../style/BtnConfirm";
import { ButtonBox } from "../../style/ButtonBox";

import styled from "styled-components";

import UserInfoForm from "./UserInfoForm";

function UserInfoView() {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const birthRef = useRef(null);
  const phoneRef = useRef(null);

  const InputInfo = [
    {
      ref: nameRef,
      name: "이름",
      type: "text",
      id: "change_name",
      placeholder: "변경할 이름을 입력해주세요.",
    },
    {
      ref: birthRef,
      name: "닉네임",
      type: "text",
      id: "change_nkname",
      placeholder: "변경할 닉네임을 입력해주세요.",
    },
    {
      ref: phoneRef,
      name: "전화번호",
      type: "tel",
      id: "change_tel",
      placeholder: "변경할 전화번호를 입력해주세요.",
    },
  ];

  return (
    <div>
      <Contents>
        <Card>
          <InputCard>
            <h3>회원 정보</h3>
            <UserInfoForm emailRef={emailRef} InputInfo={InputInfo} />
            <ButtonBox>
              <DeleteBtn>회원탈퇴</DeleteBtn>
              <BtnConfirm>회원정보 변경</BtnConfirm>
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
