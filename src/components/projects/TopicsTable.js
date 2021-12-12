// IMPORTS

// React
import React, { useState, useRef } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Checkbox from "@mui/material/Checkbox";
import { Collapse } from "@material-ui/core";
// Framer Motion
import { motion } from "framer-motion";

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

export default function TopicsTable({ subject, projectData, setProjectData }) {
  // Destruction
  const { topics } = projectData;
  // UseState
  //   UseRef
  const checkboxRef = useRef(null);
  // Redux
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);
  //   Functions
  const getIndexOfSubject = (subject) => {
    let indexOfSubject;
    projectData.topics.map((item, id) => {
      if (item[0].subject === subject) {
        indexOfSubject = id;
      }
    });
    return indexOfSubject;
  };
  const getIndexOfTopic = (indexOfSubject, topic) => {
    let indexOfTopic = false;
    for (let i = 0; i < projectData.topics; i++) {
      if (projectData.topics[indexOfSubject][1][i].title === topic) {
        indexOfTopic = i;
        break;
      }
    }
    return indexOfTopic;
  };
  const removeTopicFromProject = (indexOfSubject, indexOfTopic) => {
    console.log(projectData.topics[indexOfSubject][1].splice(indexOfTopic, 1));
  };
  const addTopicToProject = (topic, indexOfSubject) => {
    const newTopic = { title: topic, learned: false, useInProject: false };
    projectData.topics[indexOfSubject][1].push(newTopic);
    console.log(projectData.topics);
  };
  const addTopicAndSubjectToProject = () => {};
  const updateProjectData = (topic, subject) => {
    const indexOfSubject = getIndexOfSubject(subject);
    if (indexOfSubject) {
      const indexOfTopic = getIndexOfTopic(indexOfSubject, topic);
      if (indexOfTopic) {
        removeTopicFromProject(indexOfSubject, indexOfTopic);
      } else {
        addTopicToProject(topic, indexOfSubject);
      }
    } else {
      // Add topic and subject
    }
  };
  return (
    <>
      <div></div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {subject[0].title}
        </AccordionSummary>
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
                      <Checkbox
                        onChange={() => {
                          updateProjectData(topic.title, subject[0].title);
                        }}
                      />
                      {/* Create a new component were you can use state to manage if checkbox is checked or not */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </TableContainer>
      </Accordion>
    </>
  );
}
