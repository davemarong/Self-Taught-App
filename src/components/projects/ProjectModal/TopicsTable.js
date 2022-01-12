// IMPORTS

// React
import React from "react";

// Material UI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@material-ui/core";

export default function TopicTable({ subject }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {subject[0].title}
      </AccordionSummary>
      <AccordionDetails>
        {subject[1].map((topic, id) => {
          return <Typography>{topic.title}</Typography>;
        })}
      </AccordionDetails>
    </Accordion>
  );
}
