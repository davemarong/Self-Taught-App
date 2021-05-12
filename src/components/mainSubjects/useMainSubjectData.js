import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change_main_subjects } from "../../redux/actions/index";
import { useSnackbar } from "notistack";

export default function useMainSubjectData() {
  const addTopicRef = useRef();
  const [mainSubjectName, setMainSubjectName] = useState("");
  const [newSkill, setNewSkill] = useState();
  const [currentSkills, setCurrentSkills] = useState([]);
  const [render, setRender] = useState();
  const [extraSkill, setExtraSkill] = useState();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const addSkillInputRef = useRef();
  const dispatch = useDispatch();

  const topLevelIndex = useSelector((state) => state.topLevelIndex);

  const mainSubjects = useSelector((state) => state.mainSubjects);

  const handleFilterRemoveOneItem = (topLevelIndex, task) => {
    const updatedMainSubject = mainSubjects[topLevelIndex][1].filter(
      (item) => item.title != task
    );
    mainSubjects[topLevelIndex].splice(1, 1, updatedMainSubject);
  };

  const handleToggleLearnedSkill = (topLevelIndex, task, lowLevelIndex) => {
    const currentLearnedValue =
      mainSubjects[topLevelIndex][1][lowLevelIndex].learned;
    const updatedSkill = { title: task, learned: !currentLearnedValue };
    mainSubjects[topLevelIndex][1].splice(lowLevelIndex, 1, updatedSkill);
    const subjectTitle = getTitleSubjectName(topLevelIndex);
    const totalSkills = getTotalNumberOfSkills(topLevelIndex);
    const learnedSkills = getTotalNumberOfLearnedSkills(topLevelIndex);
    const updatedMainSubject = {
      title: subjectTitle,
      totalSkills: totalSkills,
      learnedSkills: learnedSkills,
    };
    mainSubjects[topLevelIndex].splice(0, 1, updatedMainSubject);
  };
  const update_Title_LearnedSkills_TotalSkills = (topLevelIndex) => {
    const subjectTitle = getTitleSubjectName(topLevelIndex);
    const totalSkills = getTotalNumberOfSkills(topLevelIndex);
    const learnedSkills = getTotalNumberOfLearnedSkills(topLevelIndex);
    const updatedMainSubject = {
      title: subjectTitle,
      totalSkills: totalSkills,
      learnedSkills: learnedSkills,
    };
    mainSubjects[topLevelIndex].splice(0, 1, updatedMainSubject);
  };
  const handleAddNewSkill = () => {
    if (newSkill) {
      setCurrentSkills([...currentSkills, { title: newSkill, learned: false }]);
    }
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
  const getTotalNumberOfLearnedSkills = (topLevelIndex) => {
    let learnedSkills = 0;
    const findNumberOfLearnedSkills = mainSubjects[topLevelIndex][1].filter(
      (item) => {
        if (item.learned === true) {
          learnedSkills++;
        }
      }
    );
    return learnedSkills;
  };

  const addTopicSnackbar = () => {
    enqueueSnackbar(
      `"${extraSkill}" added to "${mainSubjects[topLevelIndex][0].title}"`,
      { variant: "success", autoHideDuration: 2000 }
    );
  };

  const getTotalNumberOfSkills = (topLevelIndex) =>
    mainSubjects[topLevelIndex][1].length;
  const getTitleSubjectName = (topLevelIndex) =>
    mainSubjects[topLevelIndex][0].title;

  const handleMainSubjectName = (event) => {
    setMainSubjectName(event.target.value);
  };
  const handleNewSkill = (event) => {
    setNewSkill(event.target.value);
  };
  return {
    mainSubjects,
    handleMainSubjectName,
    mainSubjectName,
    setMainSubjectName,
    handleAddNewSkill,
    handleNewSkill,
    setNewSkill,
    newSkill,
    handleFilterRemoveOneItem,
    currentSkills,
    setCurrentSkills,
    handlePushInfoToRedux,
    focusInput,
    clickEnterAddSkill,
    addSkillInputRef,
    handleToggleLearnedSkill,
    render,
    setRender,
    extraSkill,
    setExtraSkill,
    handleExtraSkill,
    handleAddExtraSkill,
    getTotalNumberOfLearnedSkills,
    getTotalNumberOfSkills,
    update_Title_LearnedSkills_TotalSkills,
    addTopicRef,
    clickEnterExtraAddSkill,
    addTopicSnackbar,
  };
}
