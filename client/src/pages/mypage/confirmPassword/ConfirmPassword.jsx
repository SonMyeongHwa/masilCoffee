import Container from "../../../components/ui/container/Container";
import Card from "../../../components/ui/card/Card";
import Title from "../../../components/ui/title/Title";
import { InputCard } from "../style/InputCard";
import { BtnConfirm } from "../style/BtnConfirm";
import { ButtonBox } from "../style/ButtonBox";

import React, { Fragment, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../router/Routes";

import ConfirmPasswordForm from "./ConfirmPasswordForm";


const dummy_userData = {
  accounts: [
    {
      email: "cosmoyj@naver.com",
      password: "asdf",
    },
  ],
};

function ConfirmPassword() {
  const nav = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const data = dummy_userData.accounts;

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputEmail = emailRef.current ? emailRef.current.value : "";
    const inputPassword = passwordRef.current ? passwordRef.current.value : "";

    console.log(inputEmail);

    const isMatch = data.some(
      (account) =>
        account.email === inputEmail && account.password === inputPassword
    );

    if (!isMatch) {
      alert("이메일과 비밀번호를 확인해 주세요.");
    } else {
      nav(ROUTES.USERINFOCHANGE.path);
    }
  };

  return (
    <Fragment>
      <Container>
        <Title>
          비밀번호 확인
          <p>회원가입 시 등록한 비밀번호를 입력해주세요.</p>
        </Title>
        <Card>
          <form onSubmit={handleSubmit}>
            <InputCard>
              <ConfirmPasswordForm email={emailRef} password={passwordRef} />
              <ButtonBox>
                <BtnConfirm>확인</BtnConfirm>
              </ButtonBox>
            </InputCard>
          </form>
        </Card>
      </Container>
    </Fragment>
  );
}

export default ConfirmPassword;
