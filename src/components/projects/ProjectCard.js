// IMPORTS

// React

import React, { useState, useMemo } from "react";

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

// Components
import ProjectModal from "./ProjectModal/ProjectModal";
import MaterialUI_modal from "../modal/MaterialUI_modal";
import TransparentButton from "../button/TransparentButton";

export default function ProjectCard({ project }) {
  // UseState
  const [projectModal, setProjectModal] = useState(false);
  //   Functions
  const toggleProjectModal = () => {
    setProjectModal(!projectModal);
  };
  console.log("projectcard");

  return (
    <>
      <MaterialUI_modal
        stateValue={projectModal}
        modalFunction={toggleProjectModal}
        component={<ProjectModal project={project} />}
      />
      <Grid
        item
        xs={8}
        sm={6}
        md={3}
        container
        direction="column"
        style={{
          position: "relative",
          borderRadius: "10px",
          boxShadow: "0 0 3px",
          width: 250,
          padding: 20,
          margin: "20px",
        }}
        spacing={1}
      >
        <Grid item>
          <Typography align="left" variant="subtitle2">
            {project.timeDone}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">{project.title}</Typography>
        </Grid>
        <Grid item>
          <Typography>{project.description}</Typography>
        </Grid>
        <Grid container direction="row" item spacing={2}>
          {project.topicsUsed.map((subject, id) => {
            return (
              <Grid key={id} item xs={4}>
                <Card>
                  <Typography align="center">{subject[0].title}</Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Grid container justify="flex-end" item>
          <TransparentButton
            func={toggleProjectModal}
            icon={<OpenInNewRoundedIcon />}
            text="Open"
          />
        </Grid>
      </Grid>
    </>
  );
}
