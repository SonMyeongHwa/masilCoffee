import React from "react";
import Input from "../../../components/ui/Input/Input";
import { CenterBox } from "../style/MyPage.style";
import * as S from "../style/ConfirmPassword.style";

function ConfirmPasswordForm({ email, password }) {
  const InputData = [
    {
      ref: email,
      name: "이메일",
      type: "email",
      id: "emailIsValid",
      placeholder: "이메일을 입력하세요",
    },
    {
      ref: password,
      name: "비밀번호",
      type: "password",
      id: "passwordIsValid",
      placeholder: "비밀번호를 입력하세요",
    },
  ];

  

  return (
    <div>
      <CenterBox>
        {InputData.map((data) => {
          return (
            <S.InputBox>
              <Input
                ref={data.ref}
                input={{
                  name: data.name,
                  type: data.type,
                  id: data.id,
                  placeholder: data.placeholder,
                }}
              />
            </S.InputBox>
          );
        })}
      </CenterBox>
    </div>
  );
}

export default ConfirmPasswordForm;
