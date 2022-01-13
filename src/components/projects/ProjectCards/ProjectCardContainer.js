// IMPORTS

// React
import React, { useState } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

// Icon
import EditIcon from "@mui/icons-material/Edit";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

// Components
import ProjectCardLogic from "./ProjectCardLogic";
import TransparentButton from "../../button/TransparentButton";

// Redux
import { useSelector } from "react-redux";
import GreenButton from "../../button/GreenButton";

export default function ProjectsCard({
  openCreateProjectModal,
  closeCreateProjectModal,
  backdropSpinner,
}) {
  // UseState
  const [showDeleteOption, setShowDeleteOption] = useState(false);
  const [update, setUpdate] = useState([]);

  // Functions
  const toggleDeleteOption = () => {
    setShowDeleteOption(!showDeleteOption);
  };

  // Props object
  const projectCardProps = {
    openCreateProjectModal: openCreateProjectModal,
    closeCreateProjectModal: closeCreateProjectModal,
    showDeleteOption: showDeleteOption,
    setShowDeleteOption: setShowDeleteOption,
    setUpdate: setUpdate,
    update: update,
  };
  // Redux
  const projects = useSelector((state) => state.projects);
  console.log("container");
  return (
    <>
      <Card style={{ marginBottom: 100, paddingBottom: 50 }}>
        <Grid container direction="row" justify="space-evenly">
          <Grid style={{ margin: 16 }} container justify="flex-end" item>
            <TransparentButton
              color={showDeleteOption ? "#9e9e9eb0" : null}
              func={toggleDeleteOption}
              icon={<EditIcon />}
            >
              Edit
            </TransparentButton>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="h2">
              Future projects
            </Typography>
          </Grid>
          {projects.futureProjects.map((project, id) => {
            return (
              <React.Fragment key={project.title}>
                <ProjectCardLogic
                  projects={projects}
                  project={project}
                  {...projectCardProps}
                  color="#ff9c36"
                />
              </React.Fragment>
            );
          })}
          <Grid container justify="flex-end" style={{ marginTop: 30 }}>
            <GreenButton
              func={() => {
                backdropSpinner();
                setTimeout(openCreateProjectModal, 500);
              }}
              icon={<AddRoundedIcon />}
            >
              Create new project
            </GreenButton>
          </Grid>
        </Grid>
      </Card>
      <Card style={{ marginBottom: 100, paddingBottom: 50 }}>
        <Grid container direction="row" justify="space-evenly">
          <Grid style={{ margin: 16 }} container justify="flex-end" item>
            <TransparentButton func={toggleDeleteOption} icon={<EditIcon />}>
              Edit
            </TransparentButton>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="h2">
              Completed projects
            </Typography>
          </Grid>
          {projects.completedProjects.map((project, id) => {
            return (
              <React.Fragment key={project.title}>
                <ProjectCardLogic
                  projects={projects}
                  project={project}
                  {...projectCardProps}
                  color="#41dcff"
                />
              </React.Fragment>
            );
          })}
          <Grid container justify="flex-end" style={{ marginTop: 30 }}>
            <GreenButton
              func={() => {
                backdropSpinner();
                setTimeout(openCreateProjectModal, 500);
              }}
              icon={<AddRoundedIcon />}
            >
              Create new project
            </GreenButton>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
