import React from "react";
import styled from "styled-components";

const Input = React.forwardRef((props, ref) => {
  return (
    <TheBox>
      <Label>{props.input.name}</Label>
      {props.input.readonly === true ? (
        <InputArea ref={ref} onChange={props.onChange} {...props.input} readonly="readonly"/>
      ) : (
        <InputArea ref={ref} onChange={props.onChange} {...props.input} />
      )}
    </TheBox>
  );
});

export default Input;

const TheBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
`;

const Label = styled.h3`
  width: 80px;
  text-align: left;
`;

const InputArea = styled.input`
  width: 500px;
  height: 77px;
  border: none;
  margin-left: 30px;

  &:focus {
    outline: none;
  }
`;
