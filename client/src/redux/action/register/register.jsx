export const getAuthEmail = (email) => ({
  type: "get.auth.email",
  payload: { email },
});

export const getAuthNum = () => ({
  type: "get.auth.num"
})