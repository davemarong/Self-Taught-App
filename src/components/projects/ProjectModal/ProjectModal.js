/* eslint-disable react/jsx-pascal-case */
// IMPORTS

// React
import React, { useState } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Tooltip from "@mui/material/Tooltip";

// Icon
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

// Components
import CreateProject from "../CreateProject/CreateProject";
import MaterialUI_Modal from "../../modal/MaterialUI_modal";
import ProjectModalButtons from "./ProjectModalButtons";
import TopicsTable from "./TopicsTable";

export default function ProjectModal({
  project,
  toggleProjectModal,
  setUpdate,
  update,
  projectModalProps,
  setShowDeleteOption,
}) {
  // useState
  const [createProjectModal, setCreateProjectModal] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

  // Functions
  const toggleCreateProjectModal = () => {
    setCreateProjectModal(!createProjectModal);
  };
  // Props Object
  const projectModalButtonsProps = {
    project: project,
    toggleCreateProjectModal: toggleCreateProjectModal,
    toggleProjectModal: toggleProjectModal,
    setBackdrop: setBackdrop,
    backdrop: backdrop,
    setUpdate: setUpdate,
    update: update,
    setShowDeleteOption: setShowDeleteOption,
  };
  console.log("project modal");

  return (
    <>
      <MaterialUI_Modal
        stateValue={createProjectModal}
        modalFunction={toggleCreateProjectModal}
      >
        <CreateProject
          project={project}
          closeCreateProjectModal={toggleCreateProjectModal}
          setBackdrop={setBackdrop}
        />
      </MaterialUI_Modal>
      <Container maxWidth="lg" style={{ marginTop: 70 }}>
        <Card style={{ padding: 20, maxHeight: 600, overflowY: "auto" }}>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid container justify="flex-end" item>
              <IconButton onClick={toggleProjectModal}>
                <CloseIcon />
              </IconButton>
            </Grid>
            {project.completed ? (
              <Grid container justify="flex-end" alignItems="center" item>
                <Tooltip title="Date of project completed" placement="left-end">
                  <Typography variant="h6">{project.finishedDate}</Typography>
                </Tooltip>
              </Grid>
            ) : (
              <Grid container justify="flex-end" alignItems="center" item>
                <Tooltip title="Projects final date" placement="left-end">
                  <Typography variant="h6">{project.finalDate}</Typography>
                </Tooltip>
              </Grid>
            )}

            <Grid item>
              <Typography variant="h3">{project.title}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">{project.summary}</Typography>
            </Grid>
            {backdrop ? <CircularProgress color="secondary" /> : null}
            <Grid container justify="flex-start" item>
              <ProjectModalButtons {...projectModalButtonsProps} />
            </Grid>
            <Grid item>
              <Typography variant="h7" align="center">
                {project.description}
              </Typography>
            </Grid>
            <Grid item container direction="row" spacing={2}>
              {project.topics.map((subject, id) => {
                return (
                  <Grid key={subject[0].title} item md={6} xs={9}>
                    <TopicsTable subject={subject} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
}
