// IMPORTS

// React
import React, { useState, useMemo, useEffect } from "react";
// Redux

// Material UI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@mui/material/Backdrop";
import Zoom from "@material-ui/core/Zoom";
import CircularProgress from "@mui/material/CircularProgress";

// Icons

// Components
import CreateProject from "./CreateProject/CreateProject";
import CompletedProjects from "./CompletedProjects";
import ProjectCardContainer from "./ProjectCardContainer";
import { completedProjectsData } from "../projectsTemplate/projectsData";
import ProjectModal from "./ProjectModal/ProjectModal";
import TopicsTable from "./CreateProject/TopicsTable";
import MaterialUI_modal from "../modal/MaterialUI_modal";
// Redux
import { useSelector, useDispatch } from "react-redux";

// Utils

export default function Projects() {
  console.log("project");
  // State
  const [createProjectModal, setCreateProjectModal] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  // Redux
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
  const close = () => {
    setBackdrop(false);
  };
  return (
    <div>
      <Modal
        open={createProjectModal}
        onClose={closeCreateProjectModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Zoom timeout={300} in={createProjectModal}>
          <CreateProject
            setBackdrop={setBackdrop}
            closeCreateProjectModal={closeCreateProjectModal}
          />
        </Zoom>
      </Modal>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 3 }}
        open={backdrop}
        onClick={close}
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
