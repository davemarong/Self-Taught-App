const projects = (
  state = { completedProjects: [], futureProjects: [] },
  action
) => {
  if (action.type === "CHANGE_PROJECTS") {
    return action.payload;
  } else {
    return state;
  }
};
export default projects;
