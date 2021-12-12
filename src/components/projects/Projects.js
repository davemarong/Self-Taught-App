// IMPORTS

// React
import React, { useState } from "react";
// Redux

// Material UI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Zoom from "@material-ui/core/Zoom";
// Icons

// Components
import CreateProject from "./CreateProject";
import CompletedProjects from "./CompletedProjects";
// Utils

export default function Projects({ projects }) {
  // State
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    topics: [],
  });
  const [createProjectModal, setCreateProjectModal] = useState({
    boolean: false,
  });
  // Functions
  const openCreateProjectModal = () => {
    setCreateProjectModal({ boolean: true });
  };
  const closeCreateProjectModal = () => {
    setCreateProjectModal({ boolean: false });
  };
  return (
    <div>
      <Modal
        open={createProjectModal.boolean}
        onClose={closeCreateProjectModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Zoom timeout={300} in={createProjectModal.boolean}>
          <CreateProject />
        </Zoom>
      </Modal>
      <Typography>Completed projects</Typography>
      <CompletedProjects />
      <Button onClick={openCreateProjectModal} variant="contained">
        Create new project
      </Button>

      <CreateProject
        projectData={projectData}
        setProjectData={setProjectData}
      />
      <Typography>Future projects</Typography>
    </div>
  );
}
