// Import

// React
import React, { ReactNode } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";

// TYPE
type Props = {
  children: ReactNode;
  toggleModal: () => void;
  title: string;
  level: string;
  icon: any;
  summary: string;
  description: string;
  subjectsAndTopics: (
    | string
    | (
        | {
            title: string;
            totalSkills: number;
            learnedSkills: number;
          }
        | {
            title: string;
            learned: boolean;
          }[]
      )[][]
  )[][];
};

export const TemplateInfoCard = (props: Props) => {
  const { children, toggleModal, title, icon, level, summary, description } =
    props;
  return (
    <Grid item>
      <Container maxWidth="lg" style={{ marginTop: 70 }}>
        <Card style={{ padding: 20, height: 600, overflowY: "auto" }}>
          <Grid
            style={{ height: 400 }}
            container
            direction="column"
            justify="space-evenly"
            alignItems="center"
          >
            <Typography variant="h4">{level}</Typography>
            {icon}
            <Typography align="center" style={{ maxWidth: 800 }}>
              {description}
            </Typography>
            {children}
          </Grid>
        </Card>
      </Container>
    </Grid>
  );
};
