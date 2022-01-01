/* eslint-disable react/jsx-pascal-case */
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
import CircularProgress from "@mui/material/CircularProgress";

// Icon
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

// Framer motion
import { motion } from "framer-motion";
import TopicsTable from "./TopicsTable";

// Components
import CreateProject from "../CreateProject/CreateProject";
import MaterialUI_Modal from "../../modal/MaterialUI_modal";
import TransparentButton from "../../button/TransparentButton";
import ProjectModalButtons from "./ProjectModalButtons";
import Menu from "./Menu";
import MenuItems from "./MenuItems";
// Custom hooks
import usePushDataToServer from "../../customHooks/usePushDataToServer";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { change_projects } from "../../../redux/actions";

// Redux

export default function ProjectModal({
  project,
  toggleProjectModal,
  setUpdate,
  update,
  projectModalProps,
}) {
  // useState
  const [createProjectModal, setCreateProjectModal] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

  // Functions
  const toggleCreateProjectModal = () => {
    setCreateProjectModal(!createProjectModal);
  };
  // Props Object
  const projectModalButtonsProps = {
    project: project,
    toggleCreateProjectModal: toggleCreateProjectModal,
    toggleProjectModal: toggleProjectModal,
    setBackdrop: setBackdrop,
    backdrop: backdrop,
    setUpdate: setUpdate,
    update: update,
  };
  // console.log(projectModalProps);
  console.log(project);
  return (
    <>
      <MaterialUI_Modal
        stateValue={createProjectModal}
        modalFunction={toggleCreateProjectModal}
      >
        <CreateProject
          project={project}
          closeCreateProjectModal={toggleCreateProjectModal}
          setBackdrop={setBackdrop}
        />
      </MaterialUI_Modal>
      <Container maxWidth="md" style={{ marginTop: 70 }}>
        <Card style={{ padding: 20, maxHeight: 600, overflowY: "auto" }}>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid container justify="flex-end" item>
              <IconButton onClick={toggleProjectModal}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography>
                {project.finalDate ? project.finalDate.slice(0, 10) : null}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3">{project.title}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">{project.summary}</Typography>
            </Grid>
            {backdrop ? <CircularProgress color="secondary" /> : null}
            <Grid container justify="flex-start" item>
              <ProjectModalButtons {...projectModalButtonsProps} />
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
              {/* <Table>
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
              </Table> */}
            </Grid>
            <Grid item>
              <Typography variant="h7" align="center">
                {project.description}
              </Typography>
            </Grid>
            <Grid item container direction="row" spacing={2}>
              {project.topics.map((subject, id) => {
                return (
                  <Grid key={id} item md={6} xs={9}>
                    <TopicsTable subject={subject} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
}
