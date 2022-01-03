// IMPORTS

// React
import React, { useState, useMemo } from "react";

// Custom hooks
import usePushDataToServer from "../../customHooks/usePushDataToServer";

// Utils
import { findIndexOfProject } from "../Utils/UniversalUtils";
import { createEditableListOfTopics } from "../Utils/EditProjectUtils";
import {
  createSubjectsMemo,
  createEditableSubjectsMemo,
} from "../Utils/MemoUtils";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { change_projects } from "../../../redux/actions";

export default function CreateProjectLogic() {
  // UseState
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectSummary, setProjectSummary] = useState("");
  const [projectFinalDate, setProjectFinalDate] = useState("");
  const [projectFinishedDate, setProjectFinishedDate] = useState("");

  // Redux
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);

  // Custom hooks
  const { updateProjectsInServer } = usePushDataToServer();

  // Props object
  const inputFieldsProps = {
    projectSummary: projectSummary,
    setProjectSummary: setProjectSummary,
    projectName: projectName,
    setProjectName: setProjectName,
    projectDescription: projectDescription,
    setProjectDescription: setProjectDescription,
    projectFinalDate: projectFinalDate,
    setProjectFinalDate: setProjectFinalDate,
    projectFinishedDate: projectFinishedDate,
    setProjectFinishedDate: setProjectFinishedDate,
  };

  // Functions
  // Saving a project
  const saveProject = (project, projectTopics) => {
    const newProject = {
      title: projectName,
      summary: projectSummary,
      description: projectDescription,
      completed: false,
      topics: projectTopics,
      img: "",
      finalDate: projectFinalDate,
      finishedDate: projectFinishedDate,
      url: "",
    };
    // Replace updated project with old project
    if (project) {
      const indexOfProject = findIndexOfProject(
        project,
        projects.futureProjects
      );
      projects.futureProjects.splice(indexOfProject, 1, newProject);
      // Add new project
    } else {
      projects.futureProjects.push(newProject);
    }

    dispatch(change_projects(projects));
    updateProjectsInServer(projects);
  };
  return {
    saveProject: saveProject,
    inputFieldsProps: inputFieldsProps,
  };
}
