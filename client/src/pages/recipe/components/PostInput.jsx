import React from "react";
import { Wrap, SearchInput } from "../Recipe.style";
import SquareButton from "../../../components/ui/button/SquareButton";

const PostInput = ({ type, placeholder, text, onclick }) => {
  return (
    <Wrap>
      <SearchInput type={type} placeholder={placeholder} />
      <SquareButton text={text} type={"red"} />
    </Wrap>
  );
};

export default PostInput;
