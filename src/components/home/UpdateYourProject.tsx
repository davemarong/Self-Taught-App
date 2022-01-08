// Imports

// React
import React, { ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";

// React Router
import { useHistory, useLocation } from "react-router-dom";

// Material UI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

//  Icons
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

// Redux
import { useSelector } from "react-redux";
import ProjectCardUi from "../projects/ProjectCards/ProjectCardUi";

// Components
import GreenButton from "../button/GreenButton";

type ProjectCardUi = {
  project: any;
  color: string;
  children?: ReactNode;
};

export const UpdateYourProject = () => {
  // React Router
  let history = useHistory();
  // Redux
  let projects = useSelector((state: any) => state.projects);
  const projectTemplate = {
    completed: false,
    description: "",
    finalDate: "",
    finishedDate: "",
    img: "",
    summary: "Actually, you have not created any projects yet",
    title: "",
    topics: [],
    url: "",
  };
  // Functions
  const sendUserToPage = () => {
    history.push("/projects");
  };

  return (
    <Grid item xs={12} style={{ width: 250 }}>
      {projects.futureProjects[0] ? (
        <Card style={{ padding: 30 }}>
          <Grid container direction="column" alignItems="center">
            <>
              <Typography variant="h3">Your latest project</Typography>
              <ProjectCardUi
                project={
                  projects.futureProjects[0]
                    ? projects.futureProjects[0]
                    : projectTemplate
                }
                color="#ff9c36"
              >
                <div></div>
              </ProjectCardUi>
              <GreenButton
                func={sendUserToPage}
                icon={<OpenInNewRoundedIcon />}
              >
                Check out
              </GreenButton>
            </>
          </Grid>
        </Card>
      ) : null}
    </Grid>
  );
};
