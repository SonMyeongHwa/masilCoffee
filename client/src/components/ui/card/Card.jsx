import React from "react";
import styled from "styled-components";

function Card(props) {

  return (
    <div>
      {props.NonFlex ? (
        <NoneFlexCard>{props.children}</NoneFlexCard>
      ) : (
        <SCard>{props.children}</SCard>
      )}
    </div>
  );
}

export default Card;

const SCard = styled.div`
  display: flex;
  flex-direction: row;
  height: 742px;

  justify-content: center;

  margin-top: 63px;
`;

const NoneFlexCard = styled.div`
  height: 742px;
  width: 50%;
  justify-content: center;

  margin: 0 auto;

  margin-top: 63px;
`;
