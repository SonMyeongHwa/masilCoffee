import React, { Fragment } from "react";
import Title from "../../../components/ui/title/Title";
import Container from "../../../components/ui/container/Container";

import UserInfoView from "./userinfo/UserInfoView";

function UserInfoChange() {
  return (
    <Fragment>
      <Container>
        <Title>정보변경</Title>
        <UserInfoView />
      </Container>
    </Fragment>
  );
}

export default UserInfoChange;
