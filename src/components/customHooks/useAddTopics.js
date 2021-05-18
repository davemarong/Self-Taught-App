import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import {
  change_main_subjects,
  change_secondary_subjects,
} from "../../redux/actions/index";
import usePushDataToServer from "./usePushDataToServer";
import axios from "axios";

export default function useAddTopics() {
  const [newSkill, setNewSkill] = useState();
  const [currentSkills, setCurrentSkills] = useState([]);
  const [extraSkill, setExtraSkill] = useState();
  const [render, setRender] = useState();
  const [mainSubjectName, setMainSubjectName] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { updateMainSubjectsInServer, updateSecondarySubjectsInServer } =
    usePushDataToServer();

  const addTopicRef = useRef();
  const addSkillInputRef = useRef();

  const dispatch = useDispatch();
  const topLevelIndex = useSelector((state) => state.topLevelIndex);
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);
  const userProfileData = useSelector((state) => state.userProfileData);

  const { id } = userProfileData;

  const handleAddNewSkill = () => {
    if (newSkill) {
      setCurrentSkills([...currentSkills, { title: newSkill, learned: false }]);
    }
  };
  const handleAddExtraSkill = (topLevelIndex, subject) => {
    const updatedSkill = [
      ...subject[topLevelIndex][1],
      { title: extraSkill, learned: false },
    ];
    subject[topLevelIndex].splice(1, 1, updatedSkill);
    if (subject === mainSubjects) {
      updateMainSubjectsInServer(subject);
    } else if (subject === secondarySubjects) {
      updateSecondarySubjectsInServer(subject);
    }
    setExtraSkill("");
  };
  const handleNewSkill = (event) => {
    setNewSkill(event.target.value);
  };
  const handleExtraSkill = (event) => {
    setExtraSkill(event.target.value);
  };
  const handleMainSubjectName = (event) => {
    setMainSubjectName(event.target.value);
  };
  const focusInput = (ref) => {
    ref.current.focus();
  };
  const clickEnterAddSkill = (event) => {
    if (event.key === "Enter") {
      handleAddNewSkill();
      setNewSkill("");
      focusInput(addSkillInputRef);
    }
  };
  const clickEnterExtraAddSkill = (event) => {
    if (event.key === "Enter") {
      handleAddExtraSkill(topLevelIndex);
      setNewSkill("");
      focusInput(addTopicRef);
      addTopicSnackbar();
      setRender(extraSkill);
    }
  };
  const addTopicSnackbar = (subject) => {
    enqueueSnackbar(
      `"${extraSkill}" added to "${subject[topLevelIndex][0].title}"`,
      { variant: "success", autoHideDuration: 2000 }
    );
  };

  const handlePushInfoToRedux = (subject) => {
    const updatedMainSubject = [
      {
        title: mainSubjectName,
        totalSkills: currentSkills.length,
        learnedSkills: 0,
      },
      currentSkills,
    ];
    const updatedMainSubjects = [...subject, updatedMainSubject];
    if (subject === mainSubjects) {
      dispatch(change_main_subjects(updatedMainSubjects));
      updateMainSubjectsInServer(updatedMainSubjects);
    }
    if (subject === secondarySubjects) {
      dispatch(change_secondary_subjects(updatedMainSubjects));
      updateSecondarySubjectsInServer(updatedMainSubjects);
    }
    setCurrentSkills([]);
  };

  return {
    render,
    setRender,
    newSkill,
    setNewSkill,
    handleNewSkill,
    currentSkills,
    setCurrentSkills,
    extraSkill,
    setExtraSkill,
    handleExtraSkill,
    handleAddNewSkill,
    handleAddExtraSkill,
    clickEnterAddSkill,
    clickEnterExtraAddSkill,
    addTopicSnackbar,
    addTopicRef,
    addSkillInputRef,
    focusInput,
    handlePushInfoToRedux,
    mainSubjectName,
    setMainSubjectName,
    handleMainSubjectName,
  };
}
