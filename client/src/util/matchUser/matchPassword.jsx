export default function matchPassword (password, confirmpass) {
  const isMatch = password === confirmpass ? true : false;

  return isMatch
};