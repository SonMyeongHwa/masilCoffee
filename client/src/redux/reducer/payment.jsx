import { PAYMENT_TYPE } from "../action/_types";

const initialState = {
  orders: [], //주문이 쌓이는 곳
  payments: [],
  orderRequest: "",
  deliveryMethod: "방문포장",
  // 유진님꺼
  receipted: [],
  completed: [],
};

const payment = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_TYPE.PAYMENT:
      // console.log("페이먼드 리듀서의 액션.페이로드", action.payload);
      if (Array.isArray(action.payload)) {
        return { ...state, orders: action.payload };
      }
      return { ...state, orders: [action.payload] };
    case PAYMENT_TYPE.ADD_REQUEST_DELIVERY:
      return {
        ...state,
        orderRequest: action.payload.orderRequest,
        deliveryMethod: action.payload.deliveryMethod,
      };
    case PAYMENT_TYPE.RESET:
      return initialState;

    //유진님꺼
    case PAYMENT_TYPE.GET_ALL_ORDERS:
      const filteredReceipt = state.orders.filter(
        (order) => order.status === "주문완료"
      );
      const filteredComplete = state.orders.filter(
        (order) => order.status !== "주문완료"
      );
      return {
        ...state,
        orders: action.payload,
        receipted: filteredReceipt,
        completed: filteredComplete,
      };
    case PAYMENT_TYPE.UPDATE_ORDER:
      const updatedOrder = action.payload;
      const updatedOrders = state.receipted.filter(
        (order) => order._id !== updatedOrder._id
      );
      return {
        ...state,
        receipted: updatedOrders,
        completed: [...state.completed, updatedOrder],
      };

    case PAYMENT_TYPE.ADD_PAYMENT:
      const newPayment = [...state.payments, action.payload];
      return {
        ...state,
        payments: newPayment,
      };
    default:
      return state;
  }
};

export default payment;
