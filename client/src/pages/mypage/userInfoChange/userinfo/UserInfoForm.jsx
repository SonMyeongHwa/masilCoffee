import React, { useEffect } from "react";
import { InputBox } from "../../style/ConfirmPassword.style";
import Input from "../../../../components/ui/Input/Input";
import { InputBoxColumn } from "../../style/UserInfoChange.style";
import { useDispatch } from "react-redux";
import { postUserName, postUserPhone, postUserNickname } from "../../../../redux/action/user/userAction";

function UserInfoForm({ InputInfo, emailRef, email }) {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    switch(e.target.id) {
      case "change_name" : {
        dispatch(postUserName(e.target.value))
      }
      break;
      case "change_nkname": {
        dispatch(postUserNickname(e.target.value))
      }
      break;
      case "change_tel" : {
        dispatch(postUserPhone(e.target.value))
      }
    }
  };

  



  return (
    <div>
      <InputBox>
        <Input
          ref={emailRef}
          input={{
            name: "이메일",
            type: "email",
            id: "change_email",
            value: `${email}`,
            readonly: true,
          }}
        />
      </InputBox>
      <InputBoxColumn>
        {InputInfo.map((info) => {
          return (
            <Input
              onChange={handleInputChange}
              ref={info.ref}
              input={{
                name: info.name,
                type: info.type,
                id: info.id,
                placeholder: info.placeholder,
              }}
            />
          );
        })}
      </InputBoxColumn>
    </div>
  );
}

export default UserInfoForm;
