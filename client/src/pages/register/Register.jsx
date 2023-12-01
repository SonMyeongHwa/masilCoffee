import React from "react";
import Title from "../../components/ui/title/Title";
import Container from "../../components/ui/container/Container";
import Card from "../../components/ui/card/Card.jsx";
import { InputCard } from "./Register.style.jsx";

import RegisterForm from "./RegisterForm.jsx";

const InputInfo = [
  {
    name: "이름",
    type: "text",
    id: "name",
    placeholder: "이름을 입력해주세요",
  },
  {
    name: "닉네임",
    type: "text",
    id: "nkname",
    placeholder: "닉네임을 입력해주세요",
    confirm_double: true
  },
  {
    name: "전화번호",
    type: "tel",
    id: "tel",
    placeholder: "010-####-####",
  },
  
];

function Register() {
  return (
    <div>
      <Container>
        <Title>회원가입</Title>
        <Card>
          <InputCard>
            <RegisterForm input={InputInfo}/>
          </InputCard>
        </Card>
      </Container>
    </div>
  );
}

export default Register;
