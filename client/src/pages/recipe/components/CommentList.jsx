import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import * as S from "./style/Post.style";
import { Container } from "../Recipe.style";
import { TextWrap } from "../recipeView/RecipeView.style";
import DateFormat from "../../../util/DateFormat/DateFormat";

const CommentList = ({ comment, onComment }) => {
  const createDate = DateFormat("dateTime", comment.createdAt);
  const userId = useSelector((state) => state.user.user_id); //로그인 한 유저 아이디
  const [changeComment, setChangeComment] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event) => {
    setChangeComment(event.target.value);
  };

  //댓글 수정할 수 있는 input을 보여주기
  const handleShowInput = (event) => {
    event.preventDefault();

    setChangeComment(comment.comment);
    setIsEditing(true);
  };

  //댓글 수정하기
  const handleEdit = (event, commentId) => {
    event.preventDefault();

    if (comment.comment !== changeComment) {
      console.log(changeComment);
      if (window.confirm("댓글을 수정하시겠습니까?")) {
        onComment(changeComment, commentId, "update");
        setIsEditing(false);
      }
    }
  };

  //댓글 삭제하기
  const handleDelete = (event, commentId) => {
    event.preventDefault();

    if (window.confirm("댓글을 삭제하시겠습니까?")) {
      onComment(changeComment, commentId, "delete");
    }
  };

  //댓글 수정 취소하기
  const handleCancel = (event) => {
    event.preventDefault();

    if (window.confirm("댓글 수정을 취소하시겠습니까?")) {
      setIsEditing(false);
    }
  };

  return (
    <TextWrap>
      <Container>
        <div>
          <S.PostNickname>{comment.nickname}</S.PostNickname>
          <S.PostDate>{createDate}</S.PostDate>
          {!isEditing && comment.author._id === userId && (
            <S.EditDeleteWrap>
              <S.EditDelete onClick={handleShowInput}>수정</S.EditDelete>
              <span>│</span>
              <S.EditDelete onClick={(e) => handleDelete(e, comment._id)}>
                삭제
              </S.EditDelete>
            </S.EditDeleteWrap>
          )}
          {isEditing && comment.author._id === userId && (
            <S.EditDeleteWrap>
              <S.EditDelete onClick={(e) => handleEdit(e, comment._id)}>
                수정
              </S.EditDelete>
              <span>│</span>
              <S.EditDelete onClick={(e) => handleCancel(e, comment._id)}>
                취소
              </S.EditDelete>
            </S.EditDeleteWrap>
          )}
          {isEditing ? (
            <div style={{ margin: "10px 0" }}>
              <S.InputStyled
                type="text"
                defaultValue={comment.comment || ""}
                onChange={handleChange}
              />
            </div>
          ) : (
            <div style={{ margin: "15px 0" }}>
              {comment.comment}
            </div>
          )}
        </div>
      </Container>
    </TextWrap>
  );
};

export default CommentList;
