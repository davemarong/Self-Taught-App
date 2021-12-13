// IMPORTS

// React
import React from "react";

// Material UI
import Checkbox from "@mui/material/Checkbox";

export default function TopicCheckbox({
  subject,
  projectData,
  setProjectData,
  topic,
}) {
  // Functions

  const getIndexOfSubject = (subject) => {
    let indexOfSubject = false;
    projectData.topics.map((item, id) => {
      if (item[0].subject === subject) {
        indexOfSubject = id;
      }
    });
    return indexOfSubject;
  };
  const getIndexOfTopic = (indexOfSubject, topic) => {
    let indexOfTopic = false;
    for (let i = 0; i < projectData.topics[indexOfSubject][1].length; i++) {
      if (projectData.topics[indexOfSubject][1][i].title === topic) {
        indexOfTopic = i;
        break;
      }
    }
    return indexOfTopic;
  };
  const removeTopicFromProject = (indexOfSubject, indexOfTopic) => {
    projectData.topics[indexOfSubject][1].splice(indexOfTopic, 1);
  };
  const addTopicToProject = (topic, indexOfSubject) => {
    let updatedProjectData = projectData;
    const newTopic = { title: topic, learned: false, useInProject: false };
    updatedProjectData.topics[indexOfSubject][1].push(newTopic);
    setProjectData(updatedProjectData);
  };
  const addTopicAndSubjectToProject = (subject, topic) => {
    let updatedProjectData = projectData;
    const newTopicAndSubject = [
      { subject: subject },
      [{ title: topic, learned: false, useInProject: false }],
    ];
    updatedProjectData.topics.push(newTopicAndSubject);
    setProjectData(updatedProjectData);
  };

  const updateProjectData = (topic, subject) => {
    const indexOfSubject = getIndexOfSubject(subject);
    if (typeof indexOfSubject != "number") {
      addTopicAndSubjectToProject(subject, topic);
      return;
    }
    const indexOfTopic = getIndexOfTopic(indexOfSubject, topic);
    if (indexOfTopic) return;
    addTopicToProject(topic, indexOfSubject);
  };
  // Return
  return (
    <Checkbox
      onChange={(event) => {
        console.log(projectData.topics);
        if (event.target.checked) {
          updateProjectData(topic.title, subject[0].title);
        } else {
          const indexOfSubject = getIndexOfSubject(subject[0].title);
          const indexOfTopic = getIndexOfTopic(indexOfSubject, topic.title);
          removeTopicFromProject(indexOfSubject, indexOfTopic);
        }
      }}
    />
  );
}
