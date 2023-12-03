function dubleCheck(arr, check, checkKey) {
  const isMatch = arr.map((user) => {
    if (user[checkKey] === check) {
      return true;
    } else return false;
  });

  return isMatch;
}

export default dubleCheck;
