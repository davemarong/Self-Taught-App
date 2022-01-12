/* eslint-disable react/jsx-pascal-case */
// IMPORTS

// React
import React, { useState, useEffect } from "react";
// Redux

// React Router
import { useLocation } from "react-router-dom";

// Material UI
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

// Components
import CreateProject from "./CreateProject/CreateProject";
import ProjectCardContainer from "./ProjectCards/ProjectCardContainer";
import { completedProjectsData } from "../projectsTemplate/projectsData";
import MaterialUI_modal from "../modal/MaterialUI_modal";

export default function Projects() {
  // State
  const [createProjectModal, setCreateProjectModal] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

  // React router
  let location = useLocation();
  useEffect(() => {
    if (location.search === "?createProject") {
      backdropSpinner();
      setTimeout(openCreateProjectModal, 500);
    }
  }, []);

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
        backdropSpinner={backdropSpinner}
      />
    </div>
  );
}
