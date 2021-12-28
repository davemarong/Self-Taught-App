/* eslint-disable react/jsx-pascal-case */
// IMPORTS

// React

import React, { useState, useMemo } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import Modal from "@material-ui/core/Modal";
import Zoom from "@material-ui/core/Zoom";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

// Icon
import DeleteIcon from "@material-ui/icons/Delete";

// Components
import ProjectModal from "./ProjectModal/ProjectModal";
import MaterialUI_modal from "../modal/MaterialUI_modal";
import TransparentButton from "../button/TransparentButton";
import RedButton from "../button/RedButton";
import DeleteProject from "./DeleteProject/DeleteProject";

export default function ProjectCard({
  project,
  closeCreateProjectModal,
  showDeleteOption,
  setUpdate,
  update,
  color,
}) {
  // UseState
  const [projectModal, setProjectModal] = useState(false);
  const [deleteProjectModal, setDeleteProjectModal] = useState(false);

  //   Functions
  const toggleProjectModal = () => {
    setProjectModal(!projectModal);
  };
  const toggleDeleteProjectModal = () => {
    setDeleteProjectModal(!deleteProjectModal);
  };
  // Props object
  const projectModalProps = {
    project: project,
    closeCreateProjectModal: closeCreateProjectModal,
    showDeleteOption: showDeleteOption,
    setUpdate: setUpdate,
    update: update,
    toggleProjectModal: toggleProjectModal,
  };
  console.log("projectcard");
  return (
    <>
      <MaterialUI_modal
        stateValue={projectModal}
        modalFunction={toggleProjectModal}
      >
        <ProjectModal {...projectModalProps} />
      </MaterialUI_modal>
      <MaterialUI_modal
        stateValue={deleteProjectModal}
        modalFunction={toggleDeleteProjectModal}
      >
        <DeleteProject
          project={project}
          toggleDeleteProjectModal={toggleDeleteProjectModal}
        />
      </MaterialUI_modal>
      <Grid
        item
        xs={8}
        sm={6}
        md={4}
        container
        direction="column"
        style={{
          position: "relative",
          borderRadius: "10px",
          boxShadow: "0 0 3px",
          width: 250,
          padding: 20,
          margin: "20px",
          background: `linear-gradient(10deg, ${color} 10%, #c445fb 60%)`,
        }}
        spacing={3}
      >
        <Grid item>
          <Typography align="left" variant="subtitle2">
            {project.timeDone}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">{project.title}</Typography>
        </Grid>

        <Grid item>
          <Typography>{project.summary}</Typography>
        </Grid>

        <Grid container direction="row" item spacing={2}>
          {project.topics.map((subject, id) => {
            return (
              <Grid key={id} item xs={12}>
                <Card>
                  <Typography align="center">{subject[0].title}</Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Grid container direction="column" alignItems="flex-end" item>
          <TransparentButton
            func={toggleProjectModal}
            icon={<OpenInNewRoundedIcon />}
          >
            Open
          </TransparentButton>
          {showDeleteOption ? (
            <RedButton func={toggleDeleteProjectModal} icon={<DeleteIcon />}>
              Delete
            </RedButton>
          ) : null}
        </Grid>
      </Grid>
    </>
  );
}
