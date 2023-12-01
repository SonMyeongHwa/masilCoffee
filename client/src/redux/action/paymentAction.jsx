import { PAYMENT_TYPE } from "./_types";

export const paymentAction = (orders) => {
  return {
    type: PAYMENT_TYPE.PAYMENT,
    payload: orders,
  };
};
export const addRequestDeliveryAction = (orderRequest, deliveryMethod) => {
  return {
    type: PAYMENT_TYPE.ADD_REQUEST_DELIVERY,
    payload: {
      orderRequest,
      deliveryMethod,
    },
  };
};

// 유진님꺼
export const actionGetAllOrders = (orders) => {
  return {
    type: PAYMENT_TYPE.GET_ALL_ORDERS,
    payload: orders,
  };
};

export const actionUpdateOrder = (order) => {
  return {
    type: PAYMENT_TYPE.UPDATE_ORDER,
    payload: order,
  };
};

// 페이먼트 꿀조합
export const actionAddPayment = (payment) => {
  return {
    type: PAYMENT_TYPE.ADD_PAYMENT,
    payload: payment,
  };
};
