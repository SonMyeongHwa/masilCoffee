export const initUserSearch = (initData) => ({
  type: "init",
  payload: { initData }
} )

export const search = (quary) => ({
  type: "get.search",
  payload: { quary }
})

export const addFilter = (name, pathFn) => ({
  type: "add.filter",
  payload: { name, pathFn }
})

export const removeFilter = (name) => ({
  type: "remove.filter",
  payload: { name }
})

export const getUser = (initData) => ({
  type: "get.user",
  payload: { initData }
})

export const postUser = (updateUser) => ({
  type: "post.user",
  payload: { updateUser }
})

export const loginUser = (loginUser) => ({
  type: "login.user",
  payload: { loginUser }
})

export const logoutUser = (logoutUser) => ({
  type: "logout.user",
  payload: { logoutUser }
})

