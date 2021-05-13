import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useGetSkillAndSubjectData() {
  const topLevelIndex = useSelector((state) => state.topLevelIndex);
  const mainSubjects = useSelector((state) => state.mainSubjects);

  const getTotalNumberOfSkills = (topLevelIndex) =>
    mainSubjects[topLevelIndex][1].length;
  const getTitleSubjectName = (topLevelIndex) =>
    mainSubjects[topLevelIndex][0].title;
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
  return {
    getTotalNumberOfLearnedSkills,
    getTotalNumberOfSkills,
    getTitleSubjectName,
  };
}
