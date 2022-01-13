/* eslint-disable react/jsx-pascal-case */
// IMPORTS

// React
import React, { useState } from "react";

// Components
import ProjectModal from "../ProjectModal/ProjectModal";
import MaterialUI_modal from "../../modal/MaterialUI_modal";
import DeleteProject from "../DeleteProject/DeleteProject";
import ProjectCardUi from "./ProjectCardUi";
import ProjectCardButtons from "./ProjectCardButtons";

export default function ProjectCard({
  project,
  projects,
  closeCreateProjectModal,
  showDeleteOption,
  setUpdate,
  update,
  color,
  setShowDeleteOption,
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
    setShowDeleteOption: setShowDeleteOption,
    projects: projects,
  };

  const projectCardButtons = {
    toggleProjectModal: toggleProjectModal,
    showDeleteOption: showDeleteOption,
    toggleDeleteProjectModal: toggleDeleteProjectModal,
    setShowDeleteOption: setShowDeleteOption,
  };
  console.log("logic");

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
