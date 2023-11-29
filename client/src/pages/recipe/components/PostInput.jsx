import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrap, SearchInput } from "../Recipe.style";
import SquareButton from "../../../components/ui/button/SquareButton";
import { actionSearchBoards } from "../../../redux/action/boardAction";
import { addComments } from "../../../api/comment";

const PostInput = ( props ) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const boardData = useSelector((state) => state.board.board[0]);
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleClick = () => {
    if (props.onInsert) { //Recipe.jsx 검색
      dispatch(actionSearchBoards(query));
      props.onInsert(query);
    } else { //댓글
      if (query.trim() === "") {
        alert("댓글을 작성해주세요.");
        return;
      }
      
      const fn = async () => {
        try {
          const comment = await addComments(token, boardData._id, query);
        } catch (error) {
          console.error("PostInput 댓글 작성 error", error);
        }
      }
      fn();
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
