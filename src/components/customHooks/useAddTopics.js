import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { change_main_subjects } from "../../redux/actions/index";

export default function useAddTopics() {
  const [newSkill, setNewSkill] = useState();
  const [currentSkills, setCurrentSkills] = useState([]);
  const [extraSkill, setExtraSkill] = useState();
  const [render, setRender] = useState();

  const [mainSubjectName, setMainSubjectName] = useState("");
  const dispatch = useDispatch();
  const handleMainSubjectName = (event) => {
    setMainSubjectName(event.target.value);
  };
  const handlePushInfoToRedux = () => {
    const updatedMainSubject = [
      {
        title: mainSubjectName,
        totalSkills: currentSkills.length,
        learnedSkills: 0,
      },
      currentSkills,
    ];
    dispatch(change_main_subjects([...mainSubjects, updatedMainSubject]));
    setCurrentSkills([]);
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const addTopicRef = useRef();
  const addSkillInputRef = useRef();

  const topLevelIndex = useSelector((state) => state.topLevelIndex);

  const mainSubjects = useSelector((state) => state.mainSubjects);

  const handleAddNewSkill = () => {
    if (newSkill) {
      setCurrentSkills([...currentSkills, { title: newSkill, learned: false }]);
    }
  };
  const handleNewSkill = (event) => {
    setNewSkill(event.target.value);
  };
  const handleExtraSkill = (event) => {
    setExtraSkill(event.target.value);
  };
  const handleAddExtraSkill = (topLevelIndex) => {
    const updatedSkill = [
      ...mainSubjects[topLevelIndex][1],
      { title: extraSkill, learned: false },
    ];
    mainSubjects[topLevelIndex].splice(1, 1, updatedSkill);
    setExtraSkill("");
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
  const addTopicSnackbar = () => {
    enqueueSnackbar(
      `"${extraSkill}" added to "${mainSubjects[topLevelIndex][0].title}"`,
      { variant: "success", autoHideDuration: 2000 }
    );
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
