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
  const [isOpen, setIsOpen] = useState(false);
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
  const TopicsTableMainSubjectsMemo = useMemo(
    () =>
      mainSubjects.map((subject, id) => {
        return (
          <TopicsTable
            subject={subject}
            projectTopics={projectTopics}
            setProjectTopics={setProjectTopics}
          />
        );
      }),
    [mainSubjects, projectTopics]
  );
  const TopicsTableSecondarySubjectsMemo = useMemo(
    () =>
      secondarySubjects.map((subject, id) => {
        return (
          <TopicsTable
            subject={subject}
            projectTopics={projectTopics}
            setProjectTopics={setProjectTopics}
          />
        );
      }),
    [secondarySubjects, projectTopics]
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

  const createListOfAllTopics = () => {
    // Create array of all topics without some properties
    const mainSubjectTopics = mainSubjects.map((subject, id) => {
      return [
        { title: subject[0].title },
        subject[1].map((topic, id) => ({
          title: topic.title,
          learned: topic.learned,
          usedInProject: false,
        })),
      ];
    });
    const secondarySubjectTopics = secondarySubjects.map((subject, id) => {
      return [
        { title: subject[0].title },
        subject[1].map((topic, id) => ({
          title: topic.title,
          learned: topic.learned,
          usedInProject: false,
        })),
      ];
    });
    return [...mainSubjectTopics, ...secondarySubjectTopics];
  };
  const createListOfProjectTopics = () => {
    return createListOfAllTopics();
  };
  const concatAllTopicsAndProjectTopics = (allTopics, projectTopics) => {
    return allTopics.map((subject, id) => {
      let subjectAndTopics = subject;
      for (let i = 0; i < projectTopics.length; i++) {
        if (subject[0].title === projectTopics[i][0].title) {
          subjectAndTopics = [
            subject[0],
            [...projectTopics[i][1], ...subject[1]],
          ];
          break;
        }
      }
      return subjectAndTopics;
    });
  };
  const removeDuplicatesFromAllTopics = (topicsConcated) => {
    const updatedTopicsAndSubject = topicsConcated.map((subject, id) => {
      return [
        topicsConcated[0],
        subject[1].filter((topic, id) => {
          const indexOfTopic = subject[1].findIndex(
            (item) => topic.title === item.title
          );
          console.log(indexOfTopic);
          return indexOfTopic === id;
        }),
      ];
    });
    console.log(updatedTopicsAndSubject);
  };

  // useEffect
  useEffect(() => {
    if (setBackdrop) {
      setBackdrop(false);
    }
    const allTopics = createListOfProjectTopics();
    const topicsConcated = concatAllTopicsAndProjectTopics(
      allTopics,
      project.topicsUsed
    );
    console.log(topicsConcated);
    removeDuplicatesFromAllTopics(topicsConcated);
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
