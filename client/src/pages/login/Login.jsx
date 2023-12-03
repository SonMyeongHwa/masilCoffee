import React from "react";
import LoginForm from "./LoginForm.jsx";
import Title from "../../components/ui/title/Title";
import Container from "../../components/ui/container/Container";
import Card from "../../components/ui/card/Card.jsx";
import { InputCard } from "./Login.style.jsx";

function Login() {
  return (
    
      <Container>
          <Title>LOGIN</Title>
        <Card>
          <InputCard>
            <LoginForm />
          </InputCard>
        </Card>
      </Container>

  );
}

export default Login;
