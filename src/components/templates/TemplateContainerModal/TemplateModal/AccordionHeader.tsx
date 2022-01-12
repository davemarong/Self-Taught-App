// Import

// React
import React, { useState, ReactNode } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

// Icon
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// TYPE
type Props = {
  data: any;
};

export const AccordionHeader = ({ data }: Props) => {
  console.log(data);
  return (
    // <Card>
    <Grid container item justify="space-evenly">
      {data.map((itemContainer: any) => {
        return (
          <Grid item xs={5}>
            <Typography>{itemContainer[0]}</Typography>
            {itemContainer[1].map((subject: any) => {
              return (
                <Accordion style={{ maxHeight: 250, overflowY: "auto" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">{subject[0].title}</Typography>
                  </AccordionSummary>
                  <Grid container justify="space-between">
                    {subject[1].map((topic: any) => {
                      return (
                        <Grid item xs={5}>
                          <AccordionDetails>
                            <Typography>{topic.title}</Typography>
                          </AccordionDetails>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Accordion>
              );
            })}
          </Grid>
        );
      })}
    </Grid>
    // </Card>
  );
};
