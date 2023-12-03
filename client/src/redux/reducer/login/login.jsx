const initUsersState = {
  loginState: false,
  token: "",
  role: "",
};

const login = (state = initUsersState, action) => {
  switch (action.type) {
    case "post.login": {
      const token = action.payload.resData.data.token;
      const role = action.payload.resData.data.user;
      localStorage.setItem("token", token);

      return {
        ...state,
        loginState: true,
        token: token,
        role: role,
      };
    }

    case "logout": {
      localStorage.removeItem("token");
      return {
        ...state,
        loginState: false,
        token: "",
        role: "",
      };
    }

    default:
      return state;
  }
};

export default login;
