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
// Redux
import { useSelector } from "react-redux";
import InputFields from "./InputFields";

export default function CreateProject({ projectData, setProjectData }) {
  // UseState
  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState();
  const [projectDescription, setProjectDescription] = useState();
  const [projectTopics, setProjectTopics] = useState();
  //       [
  //     { subject: "HTML" },
  //     [{ title: "color" }, { title: "tag" }],
  //   ]
  // Redux
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);
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
    [mainSubjects, projectTopics, setProjectTopics]
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
    [projectTopics, secondarySubjects, setProjectTopics]
  );
  // Functions
  const saveProject = () => {
    const newProject = {
      title: projectName,
      description: projectDescription,
      topics: projectTopics,
    };
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
        <GreenButton onClick={saveProject} text="Save project" />
      </Card>
    </Container>
  );
}
