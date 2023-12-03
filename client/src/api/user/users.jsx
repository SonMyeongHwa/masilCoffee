import { apiInstance, apiInstanceNonAuth } from "../interceptor/apiInstance";
const urladmin = "/api/v1/users/admin";

export const axiosGetUsers = async () => {
  const res = await apiInstance.get(urladmin);

  const users = res?.data?.data;

  return users;
};

export const axiosPostUser = async (updateUser) => {
  const res = await apiInstance.post(urladmin, updateUser);

  const data = res?.data;
};
