import { COMMENT_TYPE } from "./_types";

//해당 게시글의 댓글 가져오기
export const actionGetBoardComments = (comments) => {
  return {
    type: COMMENT_TYPE.GET_BOARD_COMMENTS,
    payload: comments,
  };
};

//댓글 작성하기
export const actionAddComment = (comment) => {
  return {
    type: COMMENT_TYPE.ADD_COMMENT,
    payload: comment,
  };
};

//댓글 수정하기
export const actionGetUpdateComment = (comment) => {
  return {
    type: COMMENT_TYPE.UPDATE_COMMENT,
    payload: comment,
  };
};

//댓글 삭제하기
export const actionGetDeleteComment = (commentId) => {
  return {
    type: COMMENT_TYPE.DELETE_COMMENT,
    payload: commentId,
  };
};