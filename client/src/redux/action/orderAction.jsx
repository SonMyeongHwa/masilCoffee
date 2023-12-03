import { ORDERS_TYPE } from "./_types";

// 주문한 정보를 장바구니 결제페이지로 보냄
// id값(메뉴) 모든 정보가 포함
export const addOrder = (order) => {
  return {
    // 새로운 주문을 추가
    type: ORDERS_TYPE.ADD_ORDER,
    payload: order,
  };
};
export const removeOrder = (orderId) => {
  return {
    // orderId에 해당하는 주문을 찾아 제거
    type: ORDERS_TYPE.REMOVE_ORDER,
    payload: orderId,
  };
};
export const updateOrder = (updatedOptions, orderId) => {
  return {
    // orderId에 해당하는 주문을 찾아 업데이트
    type: ORDERS_TYPE.UPDATE_ORDER,
    payload: {
      orderId,
      updatedOptions,
    },
  };
};
