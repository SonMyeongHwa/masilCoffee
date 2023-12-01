import React, { useRef, useState } from "react";
import { axiosPostLogin } from "../../api/login/login.jsx";
import { postLogin } from "../../redux/action/login/loginAction.jsx";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/Routes.jsx";

import Contents from "../../components/ui/contents/Contents";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/button/Button.jsx";

import { ButtonBox, InputBox, LoginMessage } from "./Login.style.jsx";
import LinkTo from "../../components/ui/Link/LinkTo.jsx";
import { axiosGetUser } from "../../api/user/user.jsx";
import { getUser } from "../../redux/action/user/userAction.jsx";

function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [visible, setVisible] = useState(false)

  const visibleFn = () => {
    setVisible(!visible);

      setTimeout(() => {
        setVisible(visible);
      }, 3000)
  }

  const fn = async (email, password) => {
    try {
      const LoginRes = await axiosPostLogin(email, password);
      dispatch(postLogin(LoginRes));

      const UserRes = await axiosGetUser();

      dispatch(getUser(UserRes));
      nav(ROUTES.MAIN.path, { replace: true })

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
    
      <form onSubmit={handleSubmit}>
        {visible ? <LoginMessage>이메일과 비밀번호를 확인 해주세요.</LoginMessage> : <LoginMessage></LoginMessage>}
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
          <Button type="red" text="로그인">
            로그인
          </Button>
          <LinkTo there={{ name: "회원가입", to: ROUTES.REGISTER.path, target: true, rel: true }} />
        </ButtonBox>
      </form>
  );
}

export default LoginForm;

// ref: password,
// name: "비밀번호",
// type: "password",
// id: "passwordIsValid",
// placeholder: "비밀번호를 입력하세요",
