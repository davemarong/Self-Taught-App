/* eslint-disable react/jsx-pascal-case */
// Import

// React
import React, { useState, ReactNode } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

// Components
import MaterialUI_modal from "../../modal/MaterialUI_modal";
import { TemplateInfoCard } from "./TemplateModal/TemplateInfoCard";
import TransparentButton from "../../button/TransparentButton";

// Icon
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import SaveIcon from "@mui/icons-material/Save";
import { AccordionHeader } from "./TemplateModal/AccordionHeader";

// TYPE
type Props = {
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

export const TemplateCard = (props: Props) => {
  // Props
  const { title, level, summary, icon, subjectsAndTopics } = props;

  // State
  const [modal, setModal] = useState(false);

  // Functions
  const toggleModal = () => {
    setModal(!modal);
  };

  console.log(subjectsAndTopics, "card");
  return (
    <>
      <Grid item xs={5}>
        <Card style={{ padding: 20 }}>
          <Grid
            style={{ height: 400 }}
            container
            direction="column"
            justify="space-evenly"
            alignItems="center"
          >
            <Typography variant="h4">{level}</Typography>
            <Typography align="center">{summary}</Typography>
            {icon}
            <TransparentButton
              func={toggleModal}
              icon={<OpenInNewRoundedIcon />}
            >
              Open
            </TransparentButton>
          </Grid>
        </Card>
      </Grid>
      <MaterialUI_modal stateValue={modal} modalFunction={toggleModal}>
        <TemplateInfoCard {...props} toggleModal={toggleModal}>
          <AccordionHeader data={subjectsAndTopics} />
        </TemplateInfoCard>
      </MaterialUI_modal>
    </>
  );
};
