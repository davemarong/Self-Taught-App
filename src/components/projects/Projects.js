/* eslint-disable react/jsx-pascal-case */
// IMPORTS

// React
import React, { useState, useMemo, useEffect } from "react";
// Redux

// Material UI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Zoom from "@material-ui/core/Zoom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

// Components
import CreateProject from "./CreateProject/CreateProject";
import CompletedProjects from "./CompletedProjects";
import ProjectCardContainer from "./ProjectCards/ProjectCardContainer";
import { completedProjectsData } from "../projectsTemplate/projectsData";
import ProjectModal from "./ProjectModal/ProjectModal";
import TopicsTable from "./CreateProject/TopicsTable";
import MaterialUI_modal from "../modal/MaterialUI_modal";
// Redux
import { useSelector, useDispatch } from "react-redux";

// Utils

export default function Projects() {
  // State
  const [createProjectModal, setCreateProjectModal] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

  // Functions
  const openCreateProjectModal = () => {
    setCreateProjectModal(true);
  };
  const closeCreateProjectModal = () => {
    setCreateProjectModal(false);
  };
  const backdropSpinner = () => {
    setBackdrop(!backdrop);
  };

  return (
    <div>
      <MaterialUI_modal
        stateValue={createProjectModal}
        modalFunction={closeCreateProjectModal}
      >
        <CreateProject
          setBackdrop={setBackdrop}
          closeCreateProjectModal={closeCreateProjectModal}
        />
      </MaterialUI_modal>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 3 }}
        open={backdrop}
        onClick={backdropSpinner}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
      <ProjectCardContainer
        openCreateProjectModal={openCreateProjectModal}
        projectData={completedProjectsData}
        closeCreateProjectModal={closeCreateProjectModal}
      />
      <Button
        onClick={() => {
          backdropSpinner();
          setTimeout(openCreateProjectModal, 500);
        }}
        variant="contained"
      >
        Create new project
      </Button>
      <Typography>Future projects</Typography>
    </div>
  );
}
