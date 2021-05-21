import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
export default function Topics() {
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Grid
          container
          item
          xs={12}
          md={5}
          style={{
            background: "white",
            border: "1px solid black",
            borderRadius: 7,
            boxShadow: "3px 3px 7px",
            marginBottom: 50,
          }}
        >
          {mainSubjects.map((subject) => {
            return (
              <Grid
                container
                direction="row"
                item
                style={{
                  border: "1px solid black",
                  margin: 20,
                  padding: 20,
                  borderRadius: 10,
                  boxShadow: "0 0 3px",
                }}
              >
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    {subject[0].title}
                  </Typography>
                </Grid>

                <Grid container justify="space-evenly" item>
                  {" "}
                  {subject[1].map((topic) => {
                    return (
                      <Grid
                        item
                        xs={5}
                        style={{
                          border: "1px solid grey",
                          borderRadius: 5,
                          margin: 5,
                        }}
                      >
                        <Grid
                          container
                          direction="row"
                          item
                          style={{ padding: 5 }}
                        >
                          <Grid item xs>
                            <Typography align="left">{topic.title}</Typography>
                          </Grid>
                          <Grid item xs={2}>
                            {topic.learned ? (
                              <CheckCircleIcon
                                style={{
                                  fontSize: 16,
                                  color: "green",
                                }}
                              />
                            ) : null}
                          </Grid>
                        </Grid>{" "}
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={5}
          style={{
            background: "white",
            border: "1px solid black",
            borderRadius: 7,
            boxShadow: "3px 3px 7px",
          }}
        >
          {secondarySubjects.map((subject) => {
            return (
              <Grid
                container
                direction="row"
                item
                style={{
                  border: "1px solid black",
                  margin: 20,
                  padding: 20,
                  borderRadius: 10,
                  boxShadow: "0 0 3px",
                }}
              >
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    {subject[0].title}
                  </Typography>
                </Grid>

                <Grid container item>
                  {subject[1].map((topic) => {
                    return (
                      <Grid
                        item
                        xs={5}
                        style={{
                          border: "1px solid grey",
                          borderRadius: 5,
                          margin: 5,
                        }}
                      >
                        <Grid
                          container
                          direction="row"
                          item
                          style={{ padding: 5 }}
                        >
                          <Grid item xs>
                            <Typography align="left">{topic.title}</Typography>
                          </Grid>
                          <Grid item xs={2}>
                            {topic.learned ? (
                              <CheckCircleIcon
                                style={{
                                  fontSize: 16,
                                  color: "green",
                                }}
                              />
                            ) : null}
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}
