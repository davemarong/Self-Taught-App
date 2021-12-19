/**
 * Find index of project
 * @param {object} project Current project selected
 * @param {object} projectType "Future projects" or "Completed projects"
 * @return {number} index of project
 */
export const findIndexOfProject = (project, projectType) => {
  return projectType.findIndex((item) => item.title === project.title);
};
