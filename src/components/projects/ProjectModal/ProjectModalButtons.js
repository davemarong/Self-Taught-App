// IMPORTS

// React
import React, { useState, useEffect } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// Icon
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { change_projects } from "../../../redux/actions";
// Custom hooks
import usePushDataToServer from "../../customHooks/usePushDataToServer";
// Utils
import { findIndexOfProject } from "../Utils/UniversalUtils";

export default function ProjectModalButtons({
  project,
  toggleCreateProjectModal,
  toggleProjectModal,
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
  // Move project to either "future projects" or "completed projects"
  const moveProject = (indexOfProject, exportFromProject, insertProjectTo) => {
    let spliceProject = exportFromProject.splice(indexOfProject, 1);
    spliceProject[0].completed = !spliceProject[0].completed;
    insertProjectTo.push(spliceProject[0]);
    dispatch(change_projects(projects));
    updateProjectsInServer(projects);
    toggleProjectModal();
  };

  return (
    <>
      <Grid item>
        <Button
          onClick={() => {
            toggleCreateProjectModal();
          }}
          variant="contained"
        >
          Edit mode
        </Button>
      </Grid>
      <Grid item>
        {isProjectCompleted ? (
          <Button
            onClick={() => {
              const index = findIndexOfProject(
                project,
                projects.completedProjects
              );
              console.log(index, "complete");
              moveProject(
                index,
                projects.completedProjects,
                projects.futureProjects
              );
            }}
            variant="contained"
          >
            Un-complete project
          </Button>
        ) : (
          <Button
            onClick={() => {
              const index = findIndexOfProject(
                project,
                projects.futureProjects
              );
              console.log(index, "future");

              moveProject(
                index,
                projects.futureProjects,
                projects.completedProjects
              );
            }}
            variant="contained"
          >
            Complete project
          </Button>
        )}
      </Grid>
    </>
  );
}
