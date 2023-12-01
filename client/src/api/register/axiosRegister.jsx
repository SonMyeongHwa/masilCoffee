import { apiInstance, apiInstanceNonAuth } from "../interceptor/apiInstance";
const BASE_URL = {
  users: {
    url : "/api/v1/users"
  },
  signup: {
    url : "/api/v1/users/signup"
  },
  send_email: {
    url : "/api/v1/users/signup/send-mail"
  },
  verify: {
    url : "/api/v1/users/signup/verify-code"
  },
  admin: {
    url : "/api/v1/users/admin"
  }
}


//register
export const axiosRegister = async (name, email, nickname, password, phone) => {
  const registerBody = {
    name: name,
    email: email,
    nickname: nickname,
    phone: phone,
    password: password,
    role: "User"
  };

  try {
    const res = await apiInstanceNonAuth.post(`${BASE_URL.signup.url}`, registerBody);
    const data = res.data;

    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error);
  }
};
//send-email
export const authEmail = async (email) => {
  const authBody = {
    "email": email,
  };

  try {
    const res = await apiInstanceNonAuth.post(`${BASE_URL.send_email.url}`, authBody);
    const data = res.data;

    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error);
  }
};

//send-code
export const authComplete = async (email, code) => {
  const authBody = {
    "email": email,
    "code": parseInt(code)
  };

  try {
    const res = await apiInstanceNonAuth.post(`${BASE_URL.verify.url}`, authBody);
    const data = res.data;

    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error);
  }
};

//delete user

export const deleteUser = async () => {

  try {
    const res = await apiInstance.delete(`${BASE_URL.users.url}`);
    const data = res.data;

    return data
  } catch (err) {
    console.error("회원탈퇴 에러:", err);
  }
}

//delete admin

export const deleteAdmin = async (userId) => {
  try {
    const res = await apiInstance.delete(`${BASE_URL.admin.url}/${userId}`);
    const data = res.data;

    return data
  } catch (err) {
    console.error("관리자 탈퇴:", err)
  }
}
