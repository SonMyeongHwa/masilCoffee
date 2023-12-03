import { apiInstance } from "./interceptor/apiInstance";

//해당 게시글의 댓글 불러오기
export const getComments = async (boardId) => {
  try {
    const res = await apiInstance.get(
      `/api/v1/comment/board/${boardId}`
    );
    const comments = res.data.data;

    return comments;
  } catch (error) {
    console.error("error(getComments)", error);
  }
};

//댓글 작성
export const addComments = async (boardId, commentData) => {
  const data = {
    comment: commentData,
  };

  try {
    const res = await apiInstance.post(
      `/api/v1/comment/board/${boardId}`,
      data
    );
    const status = res.status;
    return status;
  } catch (error) {
    console.error("error(addComments)", error);
  }
};

//댓글 수정
export const updateComments = async (commentId, commentData) => {
  const data = {
    comment: commentData,
  };

  try {
    const res = await apiInstance.put(
      `/api/v1/comment/${commentId}`,
      data,
    );
    const status = res.status;
    return status;
  } catch (error) {
    console.error("error(updateComments)", error);
  }
};

//댓글 삭제
export const deleteComments = async (commentId) => {
  try {
    const res = await apiInstance.delete(
      `/api/v1/comment/${commentId}`
    );

    const status = res.status;
    if (status >= 200 && status < 300) {
      alert("댓글이 삭제되었습니다.");
    }
    return status;
  } catch (error) {
    console.error("error(deleteComments)", error);
  }
};

export const getMyComment = async () => {
  const url = "/api/v1/comment/mycomments";
  try {
    const res = await apiInstance.get(url);
    return res;
  } catch (err) {
    console.error(err);
  }
};
