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

// Framer motion
import { motion } from "framer-motion";

export default function ProjectsCard({ projectData, openCreateProjectModal }) {
  console.log("projectcontainer");
  return (
    <>
      <Card>
        <Grid container direction="row" justify="space-evenly">
          <Grid item xs={12}>
            <Typography align="center" variant="h3">
              Completed projects
            </Typography>
          </Grid>
          {projectData[1].map((project, id) => {
            return (
              <ProjectCard
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
