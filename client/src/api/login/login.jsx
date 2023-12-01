import { apiInstance, apiInstanceNonAuth } from "../interceptor/apiInstance";

const loginUrl = "/api/v1/users/login";
const logoutUrl = `/api/v1/users/logout`;
const checkLogin = `/api/v1/users/check-login`;

export const axiosPostLogin = async (email, password) => {
  const body = { email: email, password: password };

  try {
    const res = await apiInstanceNonAuth.post(loginUrl, body);
    const data = res?.data;
    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error);
  }
};

export const axiosPostLogout = async (userEmail) => {
  const body = {
    email: `${userEmail}`,
  };

  try {
    const res = await apiInstance.post(logoutUrl, body);
    const data = res?.data;

    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error);
  }
};

export const getCheckLogin = async () => {
  try {
    const res = await apiInstance.get(checkLogin);
    const data = res?.data;

    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error);
  }
};
