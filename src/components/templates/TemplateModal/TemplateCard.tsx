// Import

// React
import React, { ReactNode } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

// TYPE
type Props = {
  children: ReactNode;
  title: string;
  level: string;
  summary: string;
  description: string;
  subjectsAndTopics: never[];
};

export const TemplateCard = (props: Props) => {
  const { title, description, level, summary, subjectsAndTopics, children } =
    props;
  return (
    <Grid item xs={5}>
      <Card style={{ padding: 20 }}>
        <Grid
          style={{ height: 400 }}
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          <Typography variant="h5">{title}</Typography>
          <Typography variant="h4">{level}</Typography>
          <Typography align="center">{summary}</Typography>
          {children}
        </Grid>
      </Card>
    </Grid>
  );
};
