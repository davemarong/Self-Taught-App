// IMPORTS

// React
import React, { useState } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";

// Components
import { futureProjects } from "../projectsTemplate/projectsData";
import TopicsTable from "./TopicsTable";
// Redux
import { useSelector } from "react-redux";

export default function CreateProject({ projectData, setProjectData }) {
  // UseState
  const [isOpen, setIsOpen] = useState(false);
  // Redux
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);
  // Functions
  const addTopicToProject = () => {};

  return (
    <Container>
      <Card style={{ padding: 20, maxHeight: 600, overflowY: "auto" }}>
        <Grid container direction="column" spacing={4}>
          <Grid item xs={12}>
            <TextField fullWidth label="Project name" />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              multiline
              variant="outlined"
              label="Project description"
              rows={10}
            />
          </Grid>
        </Grid>
        <Typography>
          Choose which subject and topics you want to use in your project
        </Typography>
        {mainSubjects.map((subject, id) => {
          return (
            <TopicsTable
              subject={subject}
              projectData={projectData}
              setProjectData={setProjectData}
            />
          );
        })}
        {secondarySubjects.map((subject, id) => {
          return (
            <TopicsTable
              subject={subject}
              projectData={projectData}
              setProjectData={setProjectData}
            />
          );
        })}
      </Card>
    </Container>
  );
}
