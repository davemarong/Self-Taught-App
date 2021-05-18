const isLogged = (state = false, action) => {
  if (action.type === "SIGN_IN") {
    return true;
  } else {
    return state;
  }
};
export default isLogged;
