import React, { useState, useRef } from "react";

import doubleCheck from "../../util/doubleCheck/doubleCheck.jsx";

import Input from "../../components/ui/Input/Input";
import { InputBox, AuthButton } from "./Register.style.jsx";

function PasswordChecker({onInsert}) {
  const firstPasswordRef = useRef();
  const secPasswordRef = useRef();
  const [visible, setVisible] = useState(true);

  const doubleCheckhandler = () => {
    const isMatch = doubleCheck(
      firstPasswordRef.current.value,
      secPasswordRef.current.value
    );
    if (isMatch) {
      setVisible(!visible);
      onInsert(secPasswordRef.current.value)
    } else {
      alert("비밀번호를 확인해주새엘몬");
      onInsert("")
    }
  };

  return (
    <div>
      <InputBox>
          <Input
            ref={firstPasswordRef}
            input={{
              name: "비밀번호",
              type: "password",
              id: "password",
              placeholder: "비밀번호를 입력해주세요",
            }}
          />
        </InputBox>
        {visible ? (
          <InputBox>
            <Input
              ref={secPasswordRef}
              input={{
                name: "비밀번호 확인",
                type: "password",
                id: "passwordConfirm",
                placeholder:
                  "비밀번호 확인을 위해 한번 더 비밀번호를 입력해주세요",
                doublecheck: true,
              }}
            />
            <AuthButton onClick={doubleCheckhandler}>확인</AuthButton>
          </InputBox>
        ) : (
          <></>
        )}
    </div>
  )
}

export default PasswordChecker
