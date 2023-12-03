import FilterFn from "../../util/FilterCheckBox/FilterFn";

// const checkboxes = [
//   {
//     id: "filter-all",
//     name: "filter-all",
//     pathFn: (user) => user,
//     label: "Filter all",
//   },
//   {
//     id: "filter-userName",
//     name: "filter-userName",
//     pathFn: (user) => user.name,
//     label: "Filter user name",
//   },
//   {
//     id: "filter-tel",
//     name: "filter-tel",
//     pathFn: (user) => user.phone,
//     label: "Filter user tel",
//   },
//{
//     id: "filter-id",
//     name: "filter-id",
//     pathFn: (user) => user.id,
//     label: "Filter user id",
//   },
// ];

const initUsersState = {
  filter: {},
  searchData: [],
  users: [],
};

const user = (state = initUsersState, action) => {
  switch (action.type) {
    case "init": {
      console.log("state", state);
      console.log("action.payload", action.payload);

      return {
        ...state,
        searchData: [action.payload.users],
        users: [action.payload.users],
      };
    }

    case "get.search": {
      const { searchData, filter } = state;
      const { query } = action.payload;

      if (!query) {
        return { ...state, users: searchData };
      }

      const filteredUser = searchData.filter(FilterFn(filter, query));
      return { ...state, users: filteredUser };
    }

    case "add.filter": {
      const { name, pathFn } = action.payload;
      return { ...state, filter: { ...state.filter, [name]: pathFn } };
    }

    case "remove.filter": {
      const { [action.payload.name]: _, ...rest } = state.filter;
      return { ...state, filter: rest };
    }

    case "get.user": {
      const { initData } = action.payload;
      return { ...state, users: initData };
    }

    case "post.user": {
      const { updateUser } = action.payload;

      return {
        ...state,
        users: updateUser,
      };
    }

    default:
      return state;
  }
};

export default user;
