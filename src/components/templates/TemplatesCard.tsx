/* eslint-disable react/jsx-pascal-case */
// Import

// React
import React, { useState, ReactNode } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

// Components
import MaterialUI_modal from "../modal/MaterialUI_modal";
import { TemplateCardContainer } from "./TemplateContainerModal/TemplateCardContainer";
import { TemplateCard } from "./TemplateContainerModal/TemplateCard";
import { TemplateHeader } from "./TemplateContainerModal/TemplateHeader";

// TYPES
type Props = {
  children: ReactNode;
  templateData: {
    name: string;
    description: string;
    icon: JSX.Element;
    templates: {
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
    }[];
  };
};
export const TemplatesCard = ({ children, templateData }: Props) => {
  // State
  const [modal, setModal] = useState(false);

  // Functions
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Grid item xs={6}>
        <Card>
          <Grid
            style={{ padding: 20, height: 350 }}
            container
            direction="column"
            alignItems="center"
            justify="space-evenly"
          >
            <Typography align="center" variant="h4">
              {templateData.name} Templates
            </Typography>
            {templateData.icon}
            <Typography align="center">{templateData.description}</Typography>
            <Grid item container justify="flex-end">
              {React.cloneElement(children as React.ReactElement<any>, {
                func: toggleModal,
              })}
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <MaterialUI_modal stateValue={modal} modalFunction={toggleModal}>
        <TemplateCardContainer toggleModal={toggleModal}>
          <TemplateHeader>{templateData.name} templates</TemplateHeader>
          {templateData.templates.map((template) => {
            return <TemplateCard {...template} />;
          })}
        </TemplateCardContainer>
      </MaterialUI_modal>
    </>
  );
};
