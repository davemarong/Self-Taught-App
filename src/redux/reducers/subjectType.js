const subjectType = (state = [], action) => {
  if (action.type === "CHANGE_SUBJECT_TYPE") {
    return action.payload;
  } else {
    return state;
  }
};
export default subjectType;
