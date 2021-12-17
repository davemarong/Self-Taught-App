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
import { createSubjectsMemo } from "../Utils/MemoUtils";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { change_projects } from "../../../redux/actions";
import { CircularProgress } from "@material-ui/core";
import { getFormLabelUtilityClasses } from "@mui/material";
export default function CreateProject({ setBackdrop, project }) {
  console.log("createproject");

  // Custom hooks
  const { updateProjectsInServer } = usePushDataToServer();

  // UseState
  const [projectName, setProjectName] = useState();
  const [projectDescription, setProjectDescription] = useState();
  const [projectTopics, setProjectTopics] = useState([]);
  const [allProjectTopics, setAllProjectTopics] = useState();
  // Redux
  const dispatch = useDispatch();
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);
  const projects = useSelector((state) => state.projects);

  // UseMemo
  const [TopicsTableMainSubjectsMemo, TopicsTableSecondarySubjectsMemo] =
    createSubjectsMemo(
      useMemo,
      mainSubjects,
      secondarySubjects,
      projectTopics,
      setProjectTopics
    );

  // Functions
  const saveProject = () => {
    let updatedProjects = projects;
    const newProject = {
      title: projectName,
      description: projectDescription,
      topics: projectTopics,
    };
    updatedProjects.futureProjects.push(newProject);
    dispatch(change_projects(updatedProjects));
    updateProjectsInServer(updatedProjects);
  };

  // useEffect
  useEffect(() => {
    if (setBackdrop) {
      setBackdrop(false);
    }
    if (project) {
      createEditableListOfTopics(mainSubjects, secondarySubjects, project);
    }
  }, []);
  console.log(project);
  return (
    <>
      <Container maxWidth="md" style={{ marginTop: 70 }}>
        <Card style={{ padding: 20, maxHeight: 600, overflowY: "auto" }}>
          <Typography variant="h4">Create a new project</Typography>
          <InputFields
            setProjectName={setProjectName}
            setProjectDescription={setProjectDescription}
          />
          <Typography style={{ padding: "70px 0 20px 0" }}>
            Choose which subject and topics you want to use in your project
          </Typography>
          {TopicsTableMainSubjectsMemo}
          {TopicsTableSecondarySubjectsMemo}
          <GreenButton func={saveProject} text="Save project" />
        </Card>
      </Container>
    </>
  );
}
