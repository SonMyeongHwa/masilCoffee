import React from "react";
import styled from "styled-components";

function Contents(props) {
  return <SContents>{props.children}</SContents>;
}

export default Contents;

const SContents = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 30px;
`;
