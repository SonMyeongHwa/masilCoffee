import axios from "axios";
const url = "http://localhost:5000/api/v1/users/admin";

export const axiosGetUsers = async (token) => {

  const res = await axios.get(url, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  const users = res.data.data;

  console.log("userData:", users);

  return users
};

export const axiosPostUser = async (updateUser) => {
  const res = await axios.post(url, updateUser);

  const data = res.data;

  console.log("Updata User:", data)
};