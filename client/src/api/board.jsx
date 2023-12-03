import { apiInstance, apiInstanceForm, apiInstanceNonAuth } from "./interceptor/apiInstance";

//전체 or 카테고리별 게시글 불러오기
export const getAllBoards = async (category, currentPage, pageSize, search, token) => {
  if (!search) search = "";
  const instance = token ? apiInstance : apiInstanceNonAuth;
  try {
    const res = category
      ? await instance.get(
          `/api/v1/boards/categories/${category}?currentPage=${currentPage}&pageSize=${pageSize}&search=${search}`
        )
      : await instance.get(
          `/api/v1/boards/search?currentPage=${currentPage}&pageSize=${pageSize}&search=${search}`
        );

    const boards = res.data.data;

    return boards;
  } catch (error) {
    console.error("error(getAllBoards)", error);
  }
};

//해당 게시글 불러오기
export const getBoard = async (boardId, token) => {
  const instance = token ? apiInstance : apiInstanceNonAuth;
  try {
    const res = await instance.get(`/api/v1/boards/board/${boardId}`);
    const board = res.data.data;

    return board;
  } catch (error) {
    console.error("error(getBoard)", error);
  }
};

//(마이페이지) 내가 작성한 게시글 ---------
export const getMyBoards = async (currentPage, pageSize) => {
  try {
    const res = await apiInstance.get(
      `/api/v1/boards/mypost?currentPage=${currentPage}&pageSize=${pageSize}`
    );
    const board = res.data.data;

    return board;
  } catch (error) {
    console.error("error(getMyBoards)", error);
  }
};

//게시글 작성하기
export const addBoard = async (formData) => {
  try {
    const res = await apiInstanceForm.post("/api/v1/boards/", formData);

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

export const updateBoard = async (boardId, formData) => {
  console.log(boardId)

  try {
    const res = await apiInstanceForm.put(
      `/api/v1/boards/${boardId}`,
      formData
    );

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
export const deleteBoard = async (boardId) => {
  try {
    const res = await apiInstance.delete(`/api/v1/boards/${boardId}`);

    if (res.status >= 200 && res.status < 300) {
      alert("게시글이 삭제되었습니다.");
    }
  } catch (error) {
    alert("게시글 삭제에 실패하였습니다.");
    console.error("error(deleteBoard)", error);
  }
};

//게시글 좋아요
export const likedBoard = async (boardId) => {
  try {
    const res = await apiInstance.put(`/api/v1/like/${boardId}`, {});

    const liked = res.data.data.action;
    return liked;
  } catch (error) {
    console.error("error(likedBoard)", error);
  }
};
