import React, { Fragment } from "react";
import Container from "../../../components/ui/container/Container";
import Card from "../../../components/ui/card/Card";
import CommentList from "./commentList/CommentList";
import Contents from "../../../components/ui/contents/Contents";

function CommentListPage() {
  return (
    <Fragment>
      <Container>
        <Contents>
          <Card NonFlex>
            <CommentList />
          </Card>
        </Contents>
      </Container>
    </Fragment>
  );
}

export default CommentListPage;
