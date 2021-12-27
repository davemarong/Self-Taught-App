// IMPORTS

// React
import React, { useState, useMemo, useEffect } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
// Icon
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { CircularProgress } from "@material-ui/core";
import { getFormLabelUtilityClasses } from "@mui/material";

// Framer motion
import { motion } from "framer-motion";

// Components
import TopicsTable from "./TopicsTable";
import GreenButton from "../../button/GreenButton";
import InputFields from "./InputFields";

// Custom hooks
import usePushDataToServer from "../../customHooks/usePushDataToServer";

// Utils
import { createEditableListOfTopics } from "../Utils/EditProjectUtils";
import {
  createSubjectsMemo,
  createEditableSubjectsMemo,
} from "../Utils/MemoUtils";
import { findIndexOfProject } from "../Utils/UniversalUtils";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { change_projects } from "../../../redux/actions";

export default function CreateProject({
  setBackdrop,
  project,
  closeCreateProjectModal,
  toggleCreateProjectModal,
}) {
  console.log("createproject");

  // Custom hooks
  const { updateProjectsInServer } = usePushDataToServer();

  // UseState
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectSummary, setProjectSummary] = useState("");
  const [projectTopics, setProjectTopics] = useState([]);

  // Redux
  const dispatch = useDispatch();
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);
  const projects = useSelector((state) => state.projects);

  let editableTopics;
  let editableTopicsMemo;
  let TopicsTableMainSubjectsMemo;
  let TopicsTableSecondarySubjectsMemo;

  // useEffect
  useEffect(() => {
    if (setBackdrop) {
      setBackdrop(false);
    }
    if (editableTopics) {
      setProjectTopics(project.topics);
    }
  }, []);

  // UseMemo
  // If "project" is true, then createProject is editing a current project
  if (project) {
    editableTopics = createEditableListOfTopics(
      mainSubjects,
      secondarySubjects,
      project,
      setProjectTopics
    );
    editableTopicsMemo = createEditableSubjectsMemo(
      useMemo,
      editableTopics,
      projectTopics,
      setProjectTopics
    );
  } else {
    // if "project" is false, then a new project is being created
    [TopicsTableMainSubjectsMemo, TopicsTableSecondarySubjectsMemo] =
      createSubjectsMemo(
        useMemo,
        mainSubjects,
        secondarySubjects,
        projectTopics,
        setProjectTopics
      );
  }

  // Functions
  // Saving a project
  const saveProject = () => {
    const newProject = {
      title: projectName,
      summary: projectSummary,
      description: projectDescription,
      completed: false,
      topics: projectTopics,
      img: "",
      timeSpent: "",
      timeDone: "",
      url: "",
    };
    // Replace updated project with old project
    if (project) {
      const indexOfProject = findIndexOfProject(
        project,
        projects.futureProjects
      );
      projects.futureProjects.splice(indexOfProject, 1, newProject);
      // Add new project
    } else {
      projects.futureProjects.push(newProject);
    }
    dispatch(change_projects(projects));
    updateProjectsInServer(projects);
    closeCreateProjectModal();
  };
  console.log(project);
  return (
    <>
      <Container maxWidth="md" style={{ marginTop: 70 }}>
        <Card style={{ padding: 20, maxHeight: 600, overflowY: "auto" }}>
          <IconButton onClick={closeCreateProjectModal}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h4">Create a new project</Typography>
          <InputFields
            project={project}
            projectSummary={projectSummary}
            setProjectSummary={setProjectSummary}
            projectName={projectName}
            setProjectName={setProjectName}
            projectDescription={projectDescription}
            setProjectDescription={setProjectDescription}
          />
          <Typography style={{ padding: "70px 0 20px 0" }}>
            Choose which subject and topics you want to use in your project
          </Typography>
          {editableTopicsMemo ? (
            editableTopicsMemo
          ) : (
            <div>
              {TopicsTableMainSubjectsMemo}
              {TopicsTableSecondarySubjectsMemo}
            </div>
          )}

          <GreenButton func={saveProject}> Save project</GreenButton>
        </Card>
      </Container>
    </>
  );
}
