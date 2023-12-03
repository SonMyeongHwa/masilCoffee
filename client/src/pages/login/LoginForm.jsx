import React, { Fragment, useRef, useState } from "react";
import { axiosPostLogin } from "../../api/login/login.jsx";
import { postLogin } from "../../redux/action/login/loginAction.jsx";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/Routes.jsx";

import Contents from "../../components/ui/contents/Contents";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/button/Button.jsx";
import AlertModal from "../../components/ui/alert/AlertModal.jsx";

import { ButtonBox, InputBox, LoginMessage } from "./Login.style.jsx";
import LinkTo from "../../components/ui/Link/LinkTo.jsx";
import { axiosGetUser } from "../../api/user/user.jsx";
import { getUser } from "../../redux/action/user/userAction.jsx";

function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [visible, setVisible] = useState(false);
  const [alert, setAlert] = useState(false);
  const [txt, setTxt] = useState("");

  const visibleFn = () => {
    setVisible(!visible);

    setTimeout(() => {
      setVisible(visible);
    }, 3000);
  };

  const fn = async (email, password) => {
    try {
      const LoginRes = await axiosPostLogin(email, password);
      dispatch(postLogin(LoginRes));

      setTxt("로그인이 완료되었습니다.");
      setAlert(true);

      setTimeout(() => {
        setAlert(false);
        nav(ROUTES.MAIN.path, { replace: true });
      }, 1000);

      const UserRes = await axiosGetUser();

      dispatch(getUser(UserRes));
    } catch (err) {
      console.error("로그인 에러", err);
      visibleFn();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    fn(email, password);
  };

  return (
    <Fragment>
      {alert && <AlertModal>{txt}</AlertModal>}
      <form onSubmit={handleSubmit}>
        {visible ? (
          <LoginMessage>이메일과 비밀번호를 확인 해주세요.</LoginMessage>
        ) : (
          <LoginMessage></LoginMessage>
        )}
        <InputBox>
          <Input
            ref={emailRef}
            input={{
              name: "이메일",
              type: "email",
              id: "emailIsValid",
              placeholder: "이메일을 입력하세요",
            }}
          />
        </InputBox>
        <InputBox>
          <Input
            ref={passwordRef}
            input={{
              name: "비밀번호",
              type: "password",
              id: "passwordIsValid",
              placeholder: "비밀번호를 입력하세요",
            }}
          />
        </InputBox>

        <ButtonBox>
          <Button Type="submit" type="red" text="로 그 인" />
          <Button
            Type="button"
            type="gray"
            text="회원가입"
            onClick={() => nav(ROUTES.REGISTER.path)}
          />
        </ButtonBox>
      </form>
    </Fragment>
  );
}

export default LoginForm;