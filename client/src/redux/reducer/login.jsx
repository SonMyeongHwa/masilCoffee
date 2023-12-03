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
  loginState : false,
  token : "",
  role : ""
};

const login = (state = initUsersState, action) => {
  switch (action.type) {
    case "post.login": {

      const token = action.payload.token;
      const role = action.payload.role;
      
      localStorage.setItem("authToken", token);

      return {
        ...state,
        loginState : true,
        token: token,
        role: role
      };
    }

    case "post.logout": {
      localStorage.removeItem('authToken');

      return {
        ...state,
        loginState : false,
        token: "",
        role: ""
      }
    }

    default:
      return state;
  
};
}

export default login;