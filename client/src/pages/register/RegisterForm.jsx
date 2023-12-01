import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { axiosRegister } from "../../api/register/axiosRegister.jsx";
import AuthEmail from "./AuthEmail.jsx";

import Contents from "../../components/ui/contents/Contents";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/button/Button.jsx";
import Title from "../../components/ui/title/Title.jsx";
import { ButtonBox, InputBox, AuthButton } from "./Register.style.jsx";
import PasswordChecker from "./PasswordChecker.jsx";
import { useLocation } from "react-router-dom";
import AlertModal from "../../components/ui/alert/AlertModal.jsx";

const initRegisterInfo = {
  name: "",
  email: "",
  nickname: "",
  phone: "",
  password: "",
};

function RegisterForm(props) {
  const [auth, setAuth] = useState(false);
  const [regInfo, setRegInfo] = useState(initRegisterInfo);
  const [alert, setAlert] = useState(false);
  const location = useLocation().pathname;

  const authEmail = useSelector((state) => state.register.email);

  useEffect(() => {
    setRegInfo((current) => {
      return {
        ...current,
        email: authEmail,
      };
    });
  }, [auth]);

  const handleInputChange = (e) => {
    switch (e.target.id) {
      case "name":
        {
          setRegInfo((current) => {
            return {
              ...current,
              name: e.target.value,
            };
          });
        }
        break;
      case "nkname":
        {
          setRegInfo((current) => {
            return {
              ...current,
              nickname: e.target.value,
            };
          });
        }
        break;
      case "tel":
        {
          setRegInfo((current) => {
            return {
              ...current,
              phone: e.target.value,
            };
          });
        }
        break;
      default:
        return;
    }
  };

  const passwordInsert = (value) => {
    setRegInfo((current) => {
      return {
        ...current,
        password: value,
      };
    });
  };

  const openAuthModal = () => {
    setAuth(true);
  };

  const closeAuthModal = () => {
    setAuth(false);
  };

  const fn = async (regInfo) => {
    try {
      const { name, email, nickname, password, phone } = regInfo;
      const registerRes = await axiosRegister(
        name,
        email,
        nickname,
        password,
        phone
      );

      console.log(registerRes);
      setAlert(true);

      setTimeout(() => {
        setAlert(false);
      }, 3000);
    } catch (err) {
      alert("다시 입력 해주세요");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fn(regInfo);
  };

  return (
    <Contents>
      {alert && <AlertModal>회원가입이 완료되었습니다.</AlertModal>}
      {auth && <AuthEmail onClose={closeAuthModal} />}
      <Title>모두 입력 해주세요.</Title>
      <form onSubmit={handleSubmit}>
        <InputBox>
          <Input
            location={location}
            input={{
              name: "이메일",
              type: "email",
              id: "email",
              placeholder: "이메일 형식을 지켜주세요(abcd@QQQ.com)",
              value: `${regInfo.email}`,
              readonly: true,
            }}
          />
          <AuthButton onClick={openAuthModal}>인증하기</AuthButton>
        </InputBox>
        {props.input.map((info) => (
          <InputBox key={info.id}>
            <Input onChange={handleInputChange} input={info} />
          </InputBox>
        ))}
        <PasswordChecker onInsert={passwordInsert} />
        <ButtonBox>
          <Button type="red" text="회원가입" />
        </ButtonBox>
      </form>
    </Contents>
  );
}

export default RegisterForm;
