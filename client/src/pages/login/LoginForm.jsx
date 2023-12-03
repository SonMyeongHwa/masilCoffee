import React, { useEffect, useRef } from "react";
import { axiosPostLogin } from "../../api/login.jsx";
import { loginUser } from "../../redux/action/userAction.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/Routes.jsx";


import Contents from "../../components/ui/contents/Contents";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/button/Button.jsx";

import { ButtonBox, InputBox } from "./Login.style.jsx";
import LinkTo from "../../components/ui/Link/LinkTo.jsx";

function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch()
  const nav = useNavigate()
  const selector = useSelector(state => state);
  console.log("login selector", selector)

  const fn = async (email, password) => {
    try {
      const res = await axiosPostLogin(email, password);
      dispatch(loginUser(res));

      console.log("login in page:", res);
    } catch (err) {
      console.log("login in page error:", err);
      nav(ROUTES.INTERNALSERVERERROR.path);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    fn(email, password);
  };

  return (
    <Contents>
      <form onSubmit={handleSubmit}>
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
          <LinkTo there={{ name: "회원가입", to: "/Register" }} />
        </ButtonBox>
      </form>
    </Contents>
  );
}

export default LoginForm;

// ref: password,
// name: "비밀번호",
// type: "password",
// id: "passwordIsValid",
// placeholder: "비밀번호를 입력하세요",
