import React, { Fragment } from "react";
import Container from "../../../components/ui/container/Container";
import WriteListForm from "./WriteListForm";
import Card from "../../../components/ui/card/Card";

function WriteList() {
  return (
    <Fragment>
      <Container>
        <Card NonFlex>
          <WriteListForm />
        </Card>
      </Container>
    </Fragment>
  ); 
}

export default WriteList;
