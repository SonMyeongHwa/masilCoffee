import { USERS_TYPE } from "../_types";

export const initUserSearch = (initData) => ({
  type: USERS_TYPE.GET_ALL_USERS,
  payload: initData,
});

export const search = (searchData) => ({
  type: USERS_TYPE.SEARCH_USERS,
  payload: searchData,
});

export const updateUser = (updatedUser) => ({
  type: USERS_TYPE.UPDATE_USERS,
  payload: updatedUser,
});

export const deleteUser = (userId) => ({
  type: USERS_TYPE.DELETE_USERS,
  payload: userId,
});
