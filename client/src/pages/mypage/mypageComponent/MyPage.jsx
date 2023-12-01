import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Container from "../../../components/ui/container/Container";
import Title from "../../../components/ui/title/Title";
import Card from "../../../components/ui/card/Card";
import {
  MyPageFirstContents,
  MyPageMiddleContents,
  ContentsByWrite,
} from "../style/MyPage.style";

import User from "./Links/User";
import OrderLink from "./Links/OrderLink";
import CommentLink from "./Links/CommentLink";
import WriteListLink from "./Links/WriteListLink";

function MyPage() {
  const userInfo = useSelector((state) => state.user);
  const location = useLocation().pathname;

  return (
    <Fragment>
      <Container>
        <Title>MY PAGE</Title>
        <Card>
          <MyPageFirstContents location={location}>
            <User
              userName={userInfo.nickname}
              email={userInfo.email}
              location={location}
            />
          </MyPageFirstContents>
          <MyPageMiddleContents location={location}>
            <OrderLink userId={userInfo.email} location={location} />
            <CommentLink userId={userInfo.email} location={location} />
          </MyPageMiddleContents>
          <ContentsByWrite location={location}>
            <WriteListLink userId={userInfo.email} location={location} />
          </ContentsByWrite>
        </Card>
      </Container>
    </Fragment>
  );
}

export default MyPage;
