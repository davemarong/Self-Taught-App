/* eslint-disable react/jsx-pascal-case */
// Import

// React
import React, { useState, ReactNode } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

// Components
import MaterialUI_modal from "../modal/MaterialUI_modal";
import { TemplateCardContainer } from "./TemplateModal/TemplateCardContainer";
import { TemplateCard } from "./TemplateModal/TemplateCard";
import { TemplateHeader } from "./TemplateModal/TemplateHeader";

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
      summary: string;
      description: string;
      subjectsAndTopics: never[];
    }[];
  };
};
export const TemplatesCard = ({ children, templateData }: Props) => {
  // State
  const [modal, setModal] = useState(false);
  const [containerModal, setContainerModal] = useState(false);

  // Functions
  const toggleModal = () => {
    setModal(!modal);
  };
  const toggleContainerModal = () => {
    setContainerModal(!containerModal);
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
                func: toggleContainerModal,
              })}
            </Grid>
          </Grid>
        </Card>
      </Grid>

      <MaterialUI_modal
        stateValue={containerModal}
        modalFunction={toggleContainerModal}
      >
        <TemplateCardContainer>
          <TemplateHeader>{templateData.name} templates</TemplateHeader>
          {templateData.templates.map((template) => {
            return (
              <TemplateCard {...template}>
                {React.cloneElement(children as React.ReactElement<any>, {
                  func: toggleModal,
                })}
              </TemplateCard>
            );
          })}
        </TemplateCardContainer>
      </MaterialUI_modal>
      <MaterialUI_modal stateValue={modal} modalFunction={toggleModal}>
        <div>hei</div>
        <div>hei</div>
        <div>hei</div>
      </MaterialUI_modal>
    </>
  );
};
