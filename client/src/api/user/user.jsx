import { apiInstance } from "../interceptor/apiInstance";
const urlAdmin = "/api/v1/users/admin";
const urluser = "/api/v1/users";

//common user
export const axiosGetUser = async () => {
  const res = await apiInstance.get(urluser);

  const user = res.data.data;

  return user;
};

export const axiosPatchUser = async (userInfo) => {
  const { nickname, phone, checkpassword } = userInfo;
  const body = {
    nickname: nickname,
    phone: phone,
    checkPassword: checkpassword,
  };

  const res = await apiInstance.patch(urluser, body);

  const newUser = res;

  return newUser;
};

export const axiosPatchUserRecipe = async (recipe) => {
  const body = {
    customRecipe: recipe
  };

  const res = await apiInstance.patch(`${urluser}/userRecipe`, body);

  const newUser = res.data.data;
  console.log('엑시오스 뉴유저레시피', newUser)
  return newUser;
};

export const axiosDelUser = async () => {
  const res = await apiInstance.delete(urluser);

  const delUser = res;

  return delUser;
};

//admin user
export const axiosGetAdmin = async (userId) => {
  const res = await apiInstance.get(`${urlAdmin}/${userId}`);

  const admin = res.data.data;

  return admin;
};

export const axiosPatchAdmin = async (
  userId,
  newName,
  newNickname,
  newPhone
) => {
  const body = { name: newName, nickname: newNickname, phone: newPhone };

  const res = await apiInstance.patch(`${urlAdmin}/${userId}`, body);

  const newAdim = res.data.data;

  return newAdim;
};

export const axiosDelAdmin = async (userId) => {
  const res = await apiInstance.delete(`${urlAdmin}/${userId}`);

  const delAdim = res.data.data;

  return delAdim;
};
