export const markProjectAsCompleted = (
  indexOfProject,
  exportFromProject,
  insertProjectTo
) => {
  const spliceProject = exportFromProject.splice(indexOfProject, 1);
  insertProjectTo.push(spliceProject[0]);
  dispatch(change_projects(projects));
  updateProjectsInServer(projects);
  toggleProjectModal();
};

const findIndexOfProject = (project) => {
  return projects.futureProjects.findIndex(
    (item) => item.title === project.title
  );
};
