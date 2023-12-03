const store = window.localStorage;

// 아이템 얻어오기 storedValue = key 값으로 저장된 값을 가져온다. 없으면 undefined
// defaultValue 초깃값을 넣는 용도
export const getItem = (key, defaultValue) => {
  try {
    const storedValue = store.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return defaultValue;
  } catch (err) {
    console.error(err);
    return defaultValue;
  }
};

export const setItem = (key, value) => {
  try {
    store.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(err);
  }
};

export const removeItem = (key) => {
  try {
    store.removeItem(key);
  } catch (err) {
    console.error(err);
  }
};
