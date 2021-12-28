// IMPORTS

// React

import React, { useState } from "react";
// Material UI
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { change_projects } from "../../../redux/actions";
// Custom hooks
import usePushDataToServer from "../../customHooks/usePushDataToServer";

// Utils
import { findIndexOfProject } from "../Utils/UniversalUtils";

export default function MenuItems({
  handleClose,
  setBackdrop,
  toggleCreateProjectModal,
  project,
  toggleProjectModal,
  update,
  setUpdate,
}) {
  // UseState
  const [isProjectCompleted, setIsProjectCompleted] = useState(
    project.completed
  );
  // Redux
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  // Custom hooks
  const { updateProjectsInServer } = usePushDataToServer();

  // Functions
  // Move project to either "future projects" or "completed projects" and reRender comp with setUpdate
  const moveProject = (indexOfProject, exportFromProject, insertProjectTo) => {
    let spliceProject = exportFromProject.splice(indexOfProject, 1);
    spliceProject[0].completed = !spliceProject[0].completed;
    insertProjectTo.push(spliceProject[0]);
    dispatch(change_projects(projects));
    updateProjectsInServer(projects);
    toggleProjectModal();
    setUpdate(update + 1);
  };
  return (
    <div>
      <Tooltip title="Edit this project" placement="left-end">
        <MenuItem
          onClick={() => {
            setBackdrop(true);
            setTimeout(toggleCreateProjectModal, 500);
            handleClose();
          }}
        >
          Edit mode
        </MenuItem>
      </Tooltip>
      {isProjectCompleted ? (
        <Tooltip title="Mark project as un-completed" placement="left-end">
          <MenuItem
            onClick={() => {
              const index = findIndexOfProject(
                project,
                projects.completedProjects
              );
              moveProject(
                index,
                projects.completedProjects,
                projects.futureProjects
              );
              handleClose();
            }}
          >
            Un-complete project
          </MenuItem>
        </Tooltip>
      ) : (
        <Tooltip title="Mark project as completed" placement="left-end">
          <MenuItem
            onClick={() => {
              const index = findIndexOfProject(
                project,
                projects.futureProjects
              );
              moveProject(
                index,
                projects.futureProjects,
                projects.completedProjects
              );
              handleClose();
            }}
          >
            Complete project
          </MenuItem>
        </Tooltip>
      )}
    </div>
  );
}
