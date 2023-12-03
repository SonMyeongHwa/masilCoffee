export const getUser = (userData) => ({
  type: "get.user",
  payload: { userData },
});

export const postUserName = (name) => ({
  type: "post.user.name",
  payload: { name },
});

export const postUserNickname = (nickname) => ({
  type: "post.user.nickname",
  payload: { nickname },
});

export const postUserPhone = (phone) => ({
  type: "post.user.phone",
  payload: { phone },
});

export const removeUser = () => ({
  type: "remove.user",
});

export const postRecipe = (recipe) => ({
  type: "post.user.recipe",
  payload: { recipe }
})

export const bringUser = () => ({
  type: "bring.user",
})