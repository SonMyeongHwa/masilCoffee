import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import axios from "axios";
import { apiInstance } from "../../api/interceptor/apiInstance";

const initialState = {
  product: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "init":
      return {
        ...state,
        product: action.payload.data,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

const initData = (proData) => ({
  type: "init",
  payload: proData,
});

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    apiInstance
      .get("/api/v1/products")
      .then((res) => res.data)
      .then((data) => dispatch(initData(data)));
  }, []);

  const Selector = useSelector((state) => state.product);

  return (
    <div>
      {Selector.map((data) => (
        <div key={data.id}>{data.name}</div>
      ))}
    </div>
  );
};

function Main() {
  return (
    <Provider store={store}>
      <Product />
    </Provider>
  );
}

export default Main;
