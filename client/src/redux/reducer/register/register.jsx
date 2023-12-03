const initRegisterState = {
  email: "",
  isNum : false,
};


const user = (state = initRegisterState, action) => {
  switch (action.type) {

    case "get.auth.email": {
      const {email} = action.payload;

      return {
        ...state,
        email: email,
      };
    }

    case "get.auth.num": {
      
      return {
        ...state,
        isNum: !state.isNum,
      }
    }

    default:
      return state;
  }
};

export default user;
