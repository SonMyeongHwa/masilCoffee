import DateFormat from "../../../util/DateFormat/DateFormat";
import { USERS_TYPE } from "../../action/_types";

const initUsersState = {
  searchData: [],
  users: [],
  tableData: [],
};

const formatUserForTable = (user) => [user._id, user.name, user.email, user.phone, user.nickname, DateFormat("date", user.createdAt)];

const users = (state = initUsersState, action) => {
  switch (action.type) {
    case USERS_TYPE.GET_ALL_USERS: {
      return {
        ...state,
        searchData: action.payload,
        users: action.payload,
        tableData: action.payload.map(formatUserForTable),
      };
    }

    case USERS_TYPE.SEARCH_USERS: {
      const { users } = state;

      if (!action.payload) {
        return { ...state, users: users };
      }
      const { name, phone, nickname } = action.payload;

      const findUser = users.filter((user) => {
        let filterName = true;
        let filterPhone = true;
        let filterNick = true;

        if (phone !== "") {
          filterPhone = user.phone === phone;
        }
        if (name !== "") {
          filterName = user.name === name;
        }
        if (nickname !== "") {
          filterNick = user.nickname === nickname;
        }

        return filterName && filterPhone && filterNick;
      });

      return {
        ...state,
        searchData: findUser,
        tableData: findUser.map(formatUserForTable),
      };
    }

    case USERS_TYPE.UPDATE_USERS: {
      const updatedUser = action.payload;
      const updatedUsers = state.users.map((user) => (user._id === updatedUser._id ? updatedUser : user));

      return {
        ...state,
        users: updatedUsers,
        tableData: updatedUsers.map(formatUserForTable),
      };
    }

    case USERS_TYPE.DELETE_USERS: {
      const deletedUserId = action.payload;
      const filteredUsers = state.users.filter((user) => user._id !== deletedUserId);

      return {
        ...state,
        users: filteredUsers,
        tableData: filteredUsers.map(formatUserForTable),
      };
    }

    default:
      return state;
  }
};

export default users;
