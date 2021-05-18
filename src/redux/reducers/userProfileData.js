const userProfileData = (state = {}, action) => {
  if (action.type === "GET_USER_PROFILE_DATA") {
    return action.payload;
  } else {
    return state;
  }
};
export default userProfileData;
