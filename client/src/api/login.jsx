import axios from "axios";
const url = "http://localhost:5000/api/v1/users";

export const axiosPostLogin = async (email, password) => {
  const loginInput = {
    email: email,
    password: password
  }

  
  try {
    const res = await axios.post(url, loginInput);
    const data = res.data;

    console.log("Response Data:", data);

    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error.message);

}
}