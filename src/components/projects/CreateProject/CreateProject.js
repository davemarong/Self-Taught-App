// IMPORTS

// React
import React, { useState, useMemo, useEffect } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

// Icon
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

// Components
import GreenButton from "../../button/GreenButton";
import InputFields from "./InputFields";

// Custom hooks
import useCreateProjectLogic from "./useCreateProjectLogic.js";

// Utils
import { createEditableListOfTopics } from "../Utils/EditProjectUtils";
import {
  createSubjectsMemo,
  createEditableSubjectsMemo,
} from "../Utils/MemoUtils";

// Redux
import { useSelector } from "react-redux";

export default function CreateProject({
  setBackdrop,
  project,
  closeCreateProjectModal,
}) {
  // Custom hooks
  const { saveProject, inputFieldsProps } = useCreateProjectLogic(project);

  // UseState
  const [projectTopics, setProjectTopics] = useState([]);

  // Redux
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);

  // useEffect
  useEffect(() => {
    if (setBackdrop) {
      setBackdrop(false);
    }
    if (editableTopics) {
      setProjectTopics(project.topics);
    }
  }, []);

  // UseMemo;
  let editableTopics;
  let editableTopicsMemo;
  let TopicsTableMainSubjectsMemo;
  let TopicsTableSecondarySubjectsMemo;
  // If "project" is true, then the "createProject" component is editing a current project
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

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: 70 }}>
        <Card style={{ padding: 20, maxHeight: 600, overflowY: "auto" }}>
          <Grid container direction="column" justify="center">
            <Grid container xs={12} justify="flex-end" item>
              <IconButton onClick={closeCreateProjectModal}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Typography align="center" variant="h4">
              Create a new project
            </Typography>
            <InputFields {...inputFieldsProps} project={project} />
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
            <Grid container justify="flex-end" item>
              <GreenButton
                func={() => {
                  saveProject(project, projectTopics);
                  closeCreateProjectModal();
                }}
              >
                Save project
              </GreenButton>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
}
