// IMPORTS

// React
import React from "react";

// Material UI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Components
import TopicCheckbox from "./TopicCheckbox";

export default function TopicsTable({
  subject,
  projectTopics,
  setProjectTopics,
  editableSubjects,
}) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {subject[0].title}
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer style={{ maxHeight: 400, overflow: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: "bolder",
                    padding: "16px 5px 16px 10px",
                  }}
                >
                  Topic
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bolder",
                    padding: "16px 5px 16px 10px",
                  }}
                >
                  Learned
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bolder",
                    padding: "16px 5px 16px 10px",
                  }}
                >
                  Add
                </TableCell>
              </TableRow>
            </TableHead>
            {subject[1].map((topic, id) => {
              return (
                <TableBody key={id}>
                  <TableRow>
                    <TableCell
                      style={{
                        padding: "0 5px 0 10px",
                        borderLeft: "1px solid rgba(224, 224, 224, 1)",
                      }}
                    >
                      {topic.title}
                    </TableCell>
                    <TableCell
                      style={{
                        padding: "0 5px 0 10px",
                      }}
                    >
                      {topic.learned ? "Yes" : "No"}
                    </TableCell>
                    <TableCell
                      style={{
                        padding: "0 5px 0 10px",
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                      }}
                    >
                      <TopicCheckbox
                        subject={subject}
                        projectTopics={projectTopics}
                        setProjectTopics={setProjectTopics}
                        topic={topic}
                        editableSubjects={editableSubjects}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
}
