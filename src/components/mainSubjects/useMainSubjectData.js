import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change_main_subjects } from "../../redux/actions/index";

export default function useMainSubjectData() {
  const [mainSubjectName, setMainSubjectName] = useState("");
  const [newSkill, setNewSkill] = useState();
  const [currentSkills, setCurrentSkills] = useState([]);

  const addSkillInputRef = useRef();

  const dispatch = useDispatch();

  const mainSubjects = useSelector((state) => state.mainSubjects);

  const handleFilterRemoveOneItem = (topLevelIndex, task) => {
    const updatedMainSubject = mainSubjects[topLevelIndex][1].filter(
      (item) => item.title != task
    );
    mainSubjects[topLevelIndex].splice(1, 1, updatedMainSubject);
    dispatch(change_main_subjects(mainSubjects));
  };
  const handleToggleLearnedSkill = (topLevelIndex, task, lowLevelIndex) => {
    const updatedSkill = { title: task, learned: true };
    mainSubjects[topLevelIndex][1].splice(lowLevelIndex, 1, updatedSkill);
    dispatch(change_main_subjects(mainSubjects));
  };
  const handleAddNewSkill = () => {
    if (newSkill) {
      setCurrentSkills([...currentSkills, { title: newSkill, learned: false }]);
    }
  };

  const handlePushInfoToRedux = () => {
    let learnedSkills = 0;
    const findNumberOfLearnedSkills = currentSkills.filter((item) => {
      if (item.learned === true) {
        learnedSkills++;
      }
    });

    const updatedMainSubject = [
      {
        title: mainSubjectName,
        totalSkills: currentSkills.length,
        learnedSkills: learnedSkills,
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
  };
}
