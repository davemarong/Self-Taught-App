import React from "react";
import { useDispatch, useSelector } from "react-redux";

import useGetSkillAndSubjectData from "./useGetSkillAndSubjectData";
export default function useUpdateSubjectInfo() {
  const {
    getTotalNumberOfLearnedSkills,
    getTotalNumberOfSkills,
    getTitleSubjectName,
  } = useGetSkillAndSubjectData();

  const topLevelIndex = useSelector((state) => state.topLevelIndex);
  const mainSubjects = useSelector((state) => state.mainSubjects);

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

  return { update_Title_LearnedSkills_TotalSkills };
}
