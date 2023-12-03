import React, { Fragment, useState } from "react";
import { authEmail, authComplete } from "../../api/register/axiosRegister";
import { useDispatch } from "react-redux";

import Modal from "../../components/ui/modal/Modal";
import Button from "../../components/ui/button/SquareButton";

import { getAuthEmail } from "../../redux/action/register/register";
import { AuthItems, AuthTitle, AuthInput, AuthForm } from "./AuthEmail.style";
import AlertModal from "../../components/ui/alert/AlertModal";

function AuthEmail(props) {
  const [visible, setVisible] = useState(false);
  const [txt, setTxt] = useState("");
  const [alert, setAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [num, setNum] = useState(null);
  const dispatch = useDispatch();

  const emailfn = async (email) => {
    try {
      const res = await authEmail(email);
      setTxt("이메일을 확인해주세요.");
      setAlert(true);

      setTimeout(() => {
        setAlert(false);
      }, 3000);
      return res;
    } catch (err) {
      alert("없는 이메일 입니다.");
    }
  };

  const numfn = async (email, code) => {
    try {
      const res = await authComplete(email, code);
      setTxt("인증이 완료되었습니다.");
      setAlert(true);

      setTimeout(() => {
        setAlert(false);
      }, 3000);

      dispatch(getAuthEmail(email));
    } catch (err) {
      console.error(err);
    }
  };

  const handleChangeInput = (event) => {
    const value = event.target.value;
    switch (event.target.name) {
      case "email":
        {
          setEmail(value);
        }
        break;
      case "auth":
        {
          setNum(value);
        }
        break;
    }
  };

  function submitAuth(actionFn) {
    return async (e) => {
      e.preventDefault();
      try {
        const res = await actionFn();

        setVisible(!visible);
      } catch (err) {
        console.error(err);
      }
    };
  }

  const submitEmail = submitAuth(() => emailfn(email));
  const submitNum = submitAuth(() => numfn(email, num));

  return (
    <Fragment>
      {alert && <AlertModal>{txt}</AlertModal>}
      <Modal onClose={props.onClose}>
        <AuthItems>
          <AuthTitle>이메일 인증</AuthTitle>
          {!visible ? (
            <AuthForm onSubmit={submitEmail}>
              <AuthInput
                type="text"
                name="email"
                value={email}
                onChange={handleChangeInput}
                placeholder="abcd@efg.com"
              />
              <Button type="red" text="전송" />
            </AuthForm>
          ) : (
            <AuthForm onSubmit={submitNum}>
              <AuthInput
                type="number"
                name="auth"
                value={num}
                onChange={handleChangeInput}
                placeholder="00000"
              />
              <Button type="red" text="인증" />
            </AuthForm>
          )}
          <Button onClick={props.onClose} text="나가기" />
        </AuthItems>
      </Modal>
    </Fragment>
  );
}

export default AuthEmail;
