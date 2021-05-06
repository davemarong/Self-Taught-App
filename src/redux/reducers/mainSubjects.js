const mainSubjects = (state = [], action) => {
  if (action.type === "CHANGE_MAIN_SUBJECTS") {
    return action.payload;
  } else {
    return state;
  }
};
export default mainSubjects;
