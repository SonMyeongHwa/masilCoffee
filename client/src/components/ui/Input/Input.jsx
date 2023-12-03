import React from "react";
import styled from "styled-components";

const Input = React.forwardRef((props, ref) => {
  return (
    <TheBox>
      <Label>{props.input.name}</Label>
      <InputArea ref={ref} {...props.input} />
    </TheBox>
  );
});

export default Input;

const TheBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
  text-align: left;
  
`; 

const Label = styled.h3`
  width: 80px
`;

const InputArea = styled.input`
  width: 703px;
  height: 77px;
  border: none;
  margin-left: 30px;

  &:focus {
    outline: none;
}
`;
