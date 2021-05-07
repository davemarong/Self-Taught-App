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

  const handleFilterRemoveOneItem = (topIndex, task) => {
    const updatedMainSubject = mainSubjects[topIndex][1].filter(
      (item) => item != task
    );
    mainSubjects[topIndex].splice(1, 1, updatedMainSubject);
    dispatch(change_main_subjects(mainSubjects));
  };

  const handleAddNewSkill = () => {
    if (newSkill) {
      setCurrentSkills([...currentSkills, newSkill]);
    }
  };

  const handlePushInfoToRedux = () => {
    const updatedMainSubject = [{ title: mainSubjectName }, currentSkills];
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
  };
}
