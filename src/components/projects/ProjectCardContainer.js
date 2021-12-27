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
  // Functions
  const toggleDeleteOption = () => {
    setShowDeleteOption(!showDeleteOption);
  };

  // Redux
  const projects = useSelector((state) => state.projects);
  return (
    <>
      <Card style={{ marginBottom: 100, paddingBottom: 50 }}>
        <Grid container direction="row" justify="space-evenly">
          <Grid style={{ margin: 16 }} container justify="flex-end" item>
            <TransparentButton
              func={toggleDeleteOption}
              icon={<EditIcon />}
              text="Edit"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="h3">
              Future projects
            </Typography>
          </Grid>
          {projects.futureProjects.map((project, id) => {
            return (
              <ProjectCard
                project={project}
                openCreateProjectModal={openCreateProjectModal}
                closeCreateProjectModal={closeCreateProjectModal}
                showDeleteOption={showDeleteOption}
              />
            );
          })}
        </Grid>
      </Card>
      <Card style={{ marginBottom: 100, paddingBottom: 50 }}>
        <Grid container direction="row" justify="space-evenly">
          <Grid style={{ margin: 16 }} container justify="flex-end" item>
            <TransparentButton
              func={toggleDeleteOption}
              icon={<EditIcon />}
              text="Edit"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="h3">
              Completed projects
            </Typography>
          </Grid>
          {projects.completedProjects.map((project, id) => {
            return (
              <ProjectCard
                closeCreateProjectModal={closeCreateProjectModal}
                project={project}
                openCreateProjectModal={openCreateProjectModal}
              />
            );
          })}
        </Grid>
      </Card>
    </>
  );
}
