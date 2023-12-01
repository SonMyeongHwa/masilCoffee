import React, { Fragment } from "react";
import Title from "../../../components/ui/title/Title";
import Container from "../../../components/ui/container/Container";

import UserInfoView from "./userinfo/UserInfoView";
import { useParams } from "react-router-dom";

function UserInfoChange() {
  const userEmail = useParams().email;

  return (
    <Fragment>
      <Container>
        <Title>정보변경</Title>
        <UserInfoView userEmail={userEmail}/>
      </Container>
    </Fragment>
  );
}

export default UserInfoChange;
