const topLevelIndex = (state = 0, action) => {
  if (action.type === "GET_TOP_LEVEL_INDEX") {
    return action.payload;
  } else {
    return state;
  }
};
export default topLevelIndex;
