import React from "react";
import styled from 'styled-components'

function Container(props) {
  return <SContainer>{props.children}</SContainer>;
}

export default Container;

const SContainer = styled.div`
  width: 100%;
  min-height: 100%;

  background-color: #f5f5f5;

  overflow: auto;
  padding-bottom: 30px;
`;