import React from "react";
import useMainSubjectData from "../useMainSubjectData";
import { useSelector } from "react-redux";

export default function AddTopicModal_Logic({}) {
  const {
    handleAddExtraSkill,
    extraSkill,
    update_Title_LearnedSkills_TotalSkills,
    handleExtraSkill,
    focusInput,
    addTopicRef,
    addTopicSnackbar,
    setRender,
    setNewSkill,
  } = useMainSubjectData();
  const topLevelIndex = useSelector((state) => state.topLevelIndex);

  const clickEnterExtraAddSkill = (event) => {
    if (event.key === "Enter") {
      handleAddExtraSkill(topLevelIndex);
      setNewSkill("");
      focusInput(addTopicRef);
      addTopicSnackbar();
      setRender(extraSkill);
    }
  };
  return { clickEnterExtraAddSkill };
}
