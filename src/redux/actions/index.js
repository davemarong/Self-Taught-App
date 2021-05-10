export const change_main_subjects = (subject) => {
  return {
    type: "CHANGE_MAIN_SUBJECTS",
    payload: subject,
  };
};
export const get_top_level_index = (index) => {
  return {
    type: "GET_TOP_LEVEL_INDEX",
    payload: index,
  };
};
