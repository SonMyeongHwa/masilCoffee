import React from "react";
import styled from "styled-components";

function Contents(props) {
  return (
    <div>
      <SContents>{props.children}</SContents>
    </div>
  );
}

export default Contents;

const SContents = styled.div`
  display: flex;
  flex-direction: column;
`;