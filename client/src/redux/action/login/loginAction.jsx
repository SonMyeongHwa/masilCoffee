export const postLogin = (resData) => ({
  type: "post.login",
  payload: { resData },
});

export const actionLogout = () => ({
  type: "logout",
});
