/* eslint-disable react/jsx-pascal-case */
// IMPORTS

// React

import React, { useState, useMemo } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Zoom from "@material-ui/core/Zoom";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

// Icon
import DeleteIcon from "@material-ui/icons/Delete";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

// Components
import ProjectModal from "../ProjectModal/ProjectModal";
import MaterialUI_modal from "../../modal/MaterialUI_modal";
import TransparentButton from "../../button/TransparentButton";
import RedButton from "../../button/RedButton";
import DeleteProject from "../DeleteProject/DeleteProject";
import ProjectCardUi from "./ProjectCardUi";
import ProjectCardButtons from "./ProjectCardButtons";

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
    toggleProjectModal: toggleProjectModal,
    closeCreateProjectModal: closeCreateProjectModal,
    showDeleteOption: showDeleteOption,
    setUpdate: setUpdate,
    update: update,
  };

  const projectCardButtons = {
    toggleProjectModal: toggleProjectModal,
    showDeleteOption: showDeleteOption,
    toggleDeleteProjectModal: toggleDeleteProjectModal,
  };
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
      <ProjectCardUi project={project} color={color}>
        <ProjectCardButtons {...projectCardButtons} />
      </ProjectCardUi>
    </>
  );
}
