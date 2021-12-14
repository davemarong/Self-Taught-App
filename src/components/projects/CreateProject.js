// IMPORTS

// React
import React, { useState, useMemo } from "react";

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
import GreenButton from "../button/GreenButton";
import InputFields from "./InputFields";

// Custom hooks
import usePushDataToServer from "../customHooks/usePushDataToServer";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { change_projects } from "../../redux/actions";
export default function CreateProject({ projectData, setProjectData }) {
  console.log("createproject");

  // Custom hooks
  const { updateProjectsInServer } = usePushDataToServer();

  // UseState
  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState();
  const [projectDescription, setProjectDescription] = useState();
  const [projectTopics, setProjectTopics] = useState([]);

  // Redux
  const dispatch = useDispatch();

  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);
  const projects = useSelector((state) => state.projects);
  // UseMemo
  const TopicsTableMainSubjectsMemo = React.useMemo(
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
  const TopicsTableSecondarySubjectsMemo = React.useMemo(
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

  //   if (deleteSubjectModal.subject === "mainsubject") {
  //     const updatedSubject = deleteSubject(
  //       index,
  //       mainSubjects
  //     );
  //     updateMainSubjectsInServer(updatedSubject);
  //     dispatch(change_main_subjects(updatedSubject));
  //   }
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
  };
  return (
    <Container>
      <Card style={{ padding: 20, maxHeight: 600, overflowY: "auto" }}>
        <InputFields
          setProjectName={setProjectName}
          setProjectDescription={setProjectDescription}
        />
        <Typography>
          Choose which subject and topics you want to use in your project
        </Typography>
        {TopicsTableMainSubjectsMemo}
        {TopicsTableSecondarySubjectsMemo}
        <GreenButton func={saveProject} text="Save project" />
      </Card>
    </Container>
  );
}
