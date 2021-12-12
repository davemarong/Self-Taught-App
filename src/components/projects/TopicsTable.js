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
import { futureProjects } from "../projectsTemplate/projectsData";
// Redux
import { useSelector } from "react-redux";
import TopicCheckbox from "./TopicCheckbox";

export default function TopicsTable({ subject, projectData, setProjectData }) {
  // UseState
  // Redux
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);
  //   Functions

  return (
    <>
      <div></div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {subject[0].title}
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer>
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
                    Subject
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
                  <TableBody>
                    <TableRow>
                      <TableCell style={{ padding: "0 5px 0 10px" }}>
                        {topic.title}
                      </TableCell>
                      <TableCell style={{ padding: "0 5px 0 10px" }}>
                        {subject[0].title}
                      </TableCell>
                      <TableCell style={{ padding: "0 5px 0 10px" }}>
                        {topic.learned ? "Yes" : "No"}
                      </TableCell>
                      <TableCell style={{ padding: "0 5px 0 10px" }}>
                        <TopicCheckbox
                          subject={subject}
                          projectData={projectData}
                          setProjectData={setProjectData}
                          topic={topic}
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
    </>
  );
}
