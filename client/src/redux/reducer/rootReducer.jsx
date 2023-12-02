import { combineReducers } from "redux";
import board from "./board";
import comment from "./comment";
import orderOption from "./orderOption";
import order from "./order";
import orderDetail from "./orderDetail";
import payment from "./payment";
import product from "./product";
import users from "./user/users";
import user from "./user/user";
import login from "./login/login";
import register from "./register/register";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root", // localStorage key
  storage, // localStorage
  whitelist: ["login", "user", "order"], // target (reducer name)
};

const rootReducer = combineReducers({
  board,
  comment,
  orderOption,
  orderDetail,
  order,
  payment,
  product,
  users,
  user,
  login,
  register,
});

export default persistReducer(persistConfig, rootReducer);
