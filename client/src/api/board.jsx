import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

//전체 or 카테고리별 게시글 불러오기
export const getAllBoards = async (category, currentPage, pageSize) => {
  try {
    const res = category
      ? await axios.get(
          `/api/v1/boards/categories/${category}?currentPage=${currentPage}&pageSize=${pageSize}`
        )
      : await axios.get(
          `/api/v1/boards?currentPage=${currentPage}&pageSize=${pageSize}`
        );

    const boards = res.data.data.data;

    return boards;
  } catch (error) {
    console.error("error(getAllBoards)", error);
  }
};

//해당 게시글 불러오기
export const getBoard = async (boardId) => {
  try {
    const res = await axios.get(`/api/v1/boards/board/${boardId}`);
    const board = res.data.data;

    return board;
  } catch (error) {
    console.error("error(getBoard)", error);
  }
};

//(마이페이지) 내가 작성한 게시글 ---------
export const getMyBoards = async (currentPage, pageSize, token) => {
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  try {
    const res = await axios.get(
      `/api/v1/boards/mypost?currentPage=${currentPage}&pageSize=${pageSize}`,
      headers
    );
    const board = res.data.data;

    return board;
  } catch (error) {
    console.error("error(getMyBoards)", error);
  }
};

//게시글 작성하기
export const addBoard = async (token, formData) => {
  try {
    const res = await axios.post("/api/v1/boards/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status >= 200 && res.status < 300) {
      alert("게시글이 등록되었습니다.");
    }

    const board = res.data.data;
    return board;
  } catch (error) {
    alert("게시글 작성을 실패하였습니다.");
    console.error("error(addBoard)", error.response || error);
  }
};

//게시글 수정하기
export const updateBoard = async (token, boardId, formData) => {
  console.log(boardId);
  try {
    const res = await axios.put(`/api/v1/boards/${boardId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status >= 200 && res.status < 300) {
      alert("게시글이 수정되었습니다.");
    }

    const board = res.data.data;
    return board;
  } catch (error) {
    alert("게시글 수정에 실패하였습니다.");
    console.error("error(updateBoard)", error);
  }
};

//게시글 삭제하기
export const deleteBoard = async (token, boardId) => {
  try {
    const res = await axios.delete(`/api/v1/boards/${boardId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status >= 200 && res.status < 300) {
      alert("게시글이 삭제되었습니다.");
    }
  } catch (error) {
    alert("게시글 삭제에 실패하였습니다.");
    console.error("error(deleteBoard)", error);
  }
};

//게시글 좋아요
export const likedBoard = async (token, boardId) => {
  console.log("좋아요 axios", token, boardId);
  try {
    const res = await axios.put(
      `/api/v1/like/${boardId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("좋아요", res);
    const liked = res.data.data.action;
    return liked;
  } catch (error) {
    console.error("error(likedBoard)", error);
  }
};
