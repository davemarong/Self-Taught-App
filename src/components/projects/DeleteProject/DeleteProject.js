// IMPORTS

// React
import React from "react";

// Material UI
import Container from "@mui/material/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

// Icon
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

// Custom hooks
import usePushDataToServer from "../../customHooks/usePushDataToServer";

// Utils
import { findIndexOfProject } from "../Utils/UniversalUtils";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { change_projects } from "../../../redux/actions";

export default function DeleteProject({ toggleDeleteProjectModal, project }) {
  // Redux
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  // Custom hooks
  const { updateProjectsInServer } = usePushDataToServer();

  // Functions
  const findProjectType = () => {
    if (project.completed) {
      return projects.completedProjects;
    } else {
      return projects.futureProjects;
    }
  };
  const deleteProject = () => {
    const projectType = findProjectType();
    const indexOfProject = findIndexOfProject(project, projectType);
    projectType.splice(indexOfProject, 1);
    dispatch(change_projects(projects));
    updateProjectsInServer(projects);
  };

  return (
    <Container style={{ marginTop: 200, maxWidth: 400 }}>
      <Card>
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid item>
            <IconButton onClick={toggleDeleteProjectModal}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid item xs={9}>
            <Typography>
              Are you sure you want to delete this subject?
            </Typography>
            <Grid
              item
              container
              direction="row"
              justify="space-around"
              style={{ margin: "40px 0" }}
            >
              <Grid item>
                <Button onClick={deleteProject} variant="outlined">
                  Yes
                </Button>
              </Grid>

              <Grid item>
                <Button onClick={toggleDeleteProjectModal} variant="outlined">
                  No
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
