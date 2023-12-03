import Container from "../../../components/ui/container/Container";
import Card from "../../../components/ui/card/Card";
import Title from "../../../components/ui/title/Title";
import { InputCard } from "../style/InputCard";
import { BtnConfirm } from "../style/BtnConfirm";
import { ButtonBox } from "../style/ButtonBox";

import React, { Fragment, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../router/Routes";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import ConfirmPasswordForm from "./ConfirmPasswordForm";
import { axiosPatchUser, axiosDelUser } from "../../../api/user/user";
import { useParams } from "react-router-dom";
import { axiosPostLogout } from "../../../api/login/login";
import { actionLogout } from "../../../redux/action/login/loginAction";
import { removeUser } from "../../../redux/action/user/userAction";
import AlertModal from "../../../components/ui/alert/AlertModal";

function ConfirmPassword() {
  const nav = useNavigate();
  const token = useSelector((state) => state.login.token);
  const user = useSelector((state) => state.user);
  const params = useParams().req;
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [alert, setAlert] = useState(false);
  const [txt, setTxt] = useState("");

  const axiosPostFn = async (nickname, phone, checkpassword, email) => {
    const userInfo = {
      nickname: nickname,
      phone: phone,
      checkpassword: checkpassword
    }
    
    try {
      const res = await axiosPatchUser(userInfo);
      await axiosPostLogout(email);
      console.log(res)

      setTxt("회원 정보 변경 완료!");
      setAlert(true);
      
      setTimeout(() => {
        setAlert(false);
      }, 3000)

      dispatch(actionLogout());
      dispatch(removeUser());
      nav(ROUTES.MAIN.path, { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  const axiosDelFn = async (email) => {
    try {
      const res = await axiosDelUser();
      console.log(res);
      await axiosPostLogout(email);
      setTxt("회원 삭제 완료!");
      setAlert(true);
      
      setTimeout(() => {
        setAlert(false);
      }, 3000)

      dispatch(actionLogout());
      dispatch(removeUser());
      nav(ROUTES.MAIN.path);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNickname = user.nickname;
    const newPhone = user.phone;
    const inputPassword = passwordRef.current ? passwordRef.current.value : "";
    const inputEmail = emailRef.current ? emailRef.current.value : "";

    switch (params) {
      case "post":
        {
          axiosPostFn(token, newNickname, newPhone, inputPassword, inputEmail);
        }
        break;
      case "del": {
        axiosDelFn(token, inputEmail);
      }
    }
  };

  return (
    <Fragment>
      {!alert && <AlertModal>{txt}</AlertModal>}
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
