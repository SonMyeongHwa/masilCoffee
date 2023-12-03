import React from "react";
import Title from "../../components/ui/title/Title";
import Container from "../../components/ui/container/Container";
import Card from "../../components/ui/card/Card.jsx";
import { InputCard } from "./Register.style.jsx";

import RegisterForm from "./RegisterForm.jsx";

function Register() {
  return (
    <div>
      <Container>
        <Title>회원가입</Title>
        <Card>
          <InputCard>
            <RegisterForm />
          </InputCard>
        </Card>
      </Container>
    </div>
  );
}

export default Register;
