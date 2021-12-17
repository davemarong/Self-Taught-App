import React from "react";
// Components
import { completedProjectsData } from "../projectsTemplate/projectsData";

// Material UI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function CompletedProjects() {
  return (
    <Card>
      <Grid container direction="row" justify="space-evenly">
        <Grid item xs={12}>
          <Typography align="center" variant="h3">
            Completed projects
          </Typography>
        </Grid>
        {completedProjectsData[1].map((project, id) => {
          return (
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
            >
              <Grid item>
                <Typography variant="h4">{project.title}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">{project.description}</Typography>
              </Grid>
              <Grid container direction="row" item>
                {project.topicsUsed.map((subject, id) => {
                  return (
                    <Grid item xs={4}>
                      <Card style={{ margin: 10 }}>
                        <Typography align="center">
                          {subject[0].title}
                        </Typography>
                        {/* <List>
                          {subject[1].map((topic, id) => {
                            return (
                              <>
                                <ListItem>{topic.title}</ListItem>
                              </>
                            );
                          })}
                        </List> */}
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
              <Grid item>
                <Typography>{project.timeSpent}</Typography>
              </Grid>
              <Grid item>
                <Typography>{project.timeDone}</Typography>
              </Grid>
              <Grid item>
                <Typography>{project.url}</Typography>
              </Grid>
              <Grid item>
                <Typography>{project.img}</Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
}
