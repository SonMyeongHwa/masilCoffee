import { apiInstance, apiInstanceNonAuth } from "../interceptor/apiInstance";

const postPaymentUrl = "/api/v1/order";
const getAllPaymentUrl = "/api/v1/order/admin";

//결제 정보 보내기
export const postPayment = async (paymentData) => {
  try {
    const res = await apiInstance.post(postPaymentUrl, paymentData);
    return res.data.data;
  } catch (error) {
    console.error("error(postPayment)", error);
  }
};

// 전체주문 가져오기
export const getAllPayment = async () => {
  const res = await apiInstance.get(getAllPaymentUrl);
  const payments = res.data.data;
  return payments;
};

// 사용자 주문 내역 가져오기
export const getPayment = async () => {
  const res = await apiInstance.get(postPaymentUrl);
  const payment = res.data.data;
  return payment;
};

// 주문정보 수정
export const updatePayment = async (orderId, orderData) => {
  const res = await apiInstance.put(`/api/v1/order/${orderId}`, orderData);
  const payment = res.data.data;
  return payment;
};

// 주문 삭제
export const deletePayment = async (orderId) => {
  try {
    const res = await apiInstanceNonAuth.delete(`/api/v1/order/${orderId}`);
    const payment = res.data.data;

    return payment;
  } catch (error) {
    console.error(error);
  }
};
