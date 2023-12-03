import React, { Fragment } from "react";
import Title from "../../../components/ui/title/Title";
import Container from "../../../components/ui/container/Container";

import UserInfoView from "./userinfo/UserInfoView";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


function UserInfoChange() {
  const userEmail = useParams().email;
  const name = useSelector(state => state.user.name);
  const nickname = useSelector(state => state.user.nickname);
  const phone = useSelector(state => state.user.phone)

  const originInfo = {name: name, nickname: nickname, phone: phone}

  return (
    <Fragment>
      <Container>
        <Title>정보변경</Title>
        <UserInfoView userEmail={userEmail} originInfo={originInfo}/>
      </Container>
    </Fragment>
  );
}

export default UserInfoChange;
