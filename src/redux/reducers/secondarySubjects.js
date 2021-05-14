const secondarySubjects = (state = [], action) => {
  if (action.type === "CHANGE_SECONDARY_SUBJECTS") {
    return action.payload;
  } else {
    return state;
  }
};
export default secondarySubjects;
