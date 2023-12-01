import React, { useState } from "react";
import { Wrap, SearchInput } from "../Recipe.style";
import SquareButton from "../../../components/ui/button/SquareButton";


const PostInput = ( props ) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleClick = () => {
    if (props.onInsert) { //Recipe.jsx 검색
      if (query.trim() !== "" && query.trim().length < 2) {
        alert("검색어는 두 글자 이상 적어주세요.");
        return;
      }
      props.onInsert(query);
    } else { //댓글 작성
      if (query.trim() === "") {
        alert("댓글을 작성해주세요.");
        return;
      }
      props.onComment(query, props.post._id, "add");
      setQuery("");
    }
  }

  const handleKeyDown = (e) => {
    if (props.onInsert && e.key === "Enter") {
      handleClick();
    }
  }

  return (
    <Wrap>
      <SearchInput
        {...props.input}
        onChange={handleChange}
        value={query}
        onKeyDown={handleKeyDown}
      />
      <SquareButton
        {...props.button}
        onClick={handleClick}
      />
    </Wrap>
  );
};

export default PostInput;
