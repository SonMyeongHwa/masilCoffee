export default function matchUsesr (userid, userpassword, id, password) {
  const isMatchId = userid === id ? true : false;
  const isMatchPassword = userpassword === password ? true : false

  if (isMatchId && isMatchPassword) {
    return true;
  } else { return false}
};