// IMPORTS

// React
import React, { useState } from "react";
// Components
import { completedProjectsData } from "../projectsTemplate/projectsData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal/ProjectModal";

// Material UI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Zoom from "@material-ui/core/Zoom";
// Icon
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@mui/icons-material/Edit";
// Components
import TransparentButton from "../button/TransparentButton";
// Framer motion
import { motion } from "framer-motion";

// Redux
import { useSelector, useDispatch } from "react-redux";

export default function ProjectsCard({
  projectData,
  openCreateProjectModal,
  closeCreateProjectModal,
}) {
  // UseState
  const [showDeleteOption, setShowDeleteOption] = useState(false);
  const [update, setUpdate] = useState(0);

  // Functions
  const toggleDeleteOption = () => {
    setShowDeleteOption(!showDeleteOption);
  };

  // Props object
  const projectCardProps = {
    openCreateProjectModal: openCreateProjectModal,
    closeCreateProjectModal: closeCreateProjectModal,
    showDeleteOption: showDeleteOption,
    setUpdate: setUpdate,
    update: update,
  };
  // Redux
  const projects = useSelector((state) => state.projects);

  return (
    <>
      <Card style={{ marginBottom: 100, paddingBottom: 50 }}>
        <Grid container direction="row" justify="space-evenly">
          <Grid style={{ margin: 16 }} container justify="flex-end" item>
            <TransparentButton
              color={showDeleteOption ? "#9e9e9eb0" : null}
              func={toggleDeleteOption}
              icon={<EditIcon />}
            >
              Edit
            </TransparentButton>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="h3">
              Future projects
            </Typography>
          </Grid>
          {projects.futureProjects.map((project, id) => {
            return (
              <React.Fragment key={id}>
                <ProjectCard
                  project={project}
                  {...projectCardProps}
                  color="#ff9c36"
                />
              </React.Fragment>
            );
          })}
        </Grid>
      </Card>
      <Card style={{ marginBottom: 100, paddingBottom: 50 }}>
        <Grid container direction="row" justify="space-evenly">
          <Grid style={{ margin: 16 }} container justify="flex-end" item>
            <TransparentButton func={toggleDeleteOption} icon={<EditIcon />}>
              Edit
            </TransparentButton>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="h3">
              Completed projects
            </Typography>
          </Grid>
          {projects.completedProjects.map((project, id) => {
            return (
              <React.Fragment key={id}>
                <ProjectCard
                  project={project}
                  {...projectCardProps}
                  color="#41dcff"
                />
              </React.Fragment>
            );
          })}
        </Grid>
      </Card>
    </>
  );
}
