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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// Icon
import AddIcon from "@material-ui/icons/Add";
// Framer motion
import { motion } from "framer-motion";
import TopicsTable from "./TopicsTable";

// Components
import CreateProject from "../CreateProject/CreateProject";
import MaterialUI_Modal from "../../modal/MaterialUI_modal";
// Custom hooks
import usePushDataToServer from "../../customHooks/usePushDataToServer";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { change_projects } from "../../../redux/actions";

// Redux

export default function ProjectModal({ project }) {
  // useState
  const [createProjectModal, setCreateProjectModal] = useState(false);
  // Redux
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  // Custom hooks
  const { updateProjectsInServer } = usePushDataToServer();
  // Functions
  const toggleCreateProjectModal = () => {
    setCreateProjectModal(!createProjectModal);
  };
  const markProjectAsCompleted = (indexOfProject) => {
    const spliceProject = projects.futureProjects.splice(indexOfProject, 1);
    projects.completedProjects.push(spliceProject);
    dispatch(change_projects(projects));
    updateProjectsInServer(projects);
  };
  const findIndexOfProject = (project) => {
    return projects.futureProjects.findIndex(
      (item) => item.title === project.title
    );
  };

  return (
    <>
      <MaterialUI_Modal
        stateValue={createProjectModal}
        modalFunction={toggleCreateProjectModal}
        component={<CreateProject project={project} />}
      />
      <Container maxWidth="md" style={{ marginTop: 70 }}>
        <Card style={{ padding: 20, maxHeight: 600, overflowY: "auto" }}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h3">{project.title}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">{project.description}</Typography>
            </Grid>
            <Grid
              container
              justify="flex-end"
              alignItems="flex-end"
              alignContent="flex-end"
              item
              md={4}
              sm={6}
              xs={9}
            >
              <Table>
                <TableBody
                  style={{
                    border: "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  <TableRow>
                    <TableCell>Time spent</TableCell>
                    <TableCell>{project.timeSpent}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Time done</TableCell>
                    <TableCell>{project.timeDone}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Url</TableCell>
                    <TableCell>{project.url}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
            <Grid item container direction="row" spacing={2}>
              {project.topics.map((subject, id) => {
                return (
                  <Grid item md={4} xs={9}>
                    <TopicsTable subject={subject} />
                  </Grid>
                );
              })}
            </Grid>
            <Grid item>
              <Button
                onClick={() => {
                  toggleCreateProjectModal();
                }}
                variant="contained"
              >
                Edit mode
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => {
                  const index = findIndexOfProject(project);
                  markProjectAsCompleted(index);
                }}
                variant="contained"
              >
                Complete project
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
}
