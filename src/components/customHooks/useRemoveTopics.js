import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useRemoveTopics() {
  const topLevelIndex = useSelector((state) => state.topLevelIndex);
  const mainSubjects = useSelector((state) => state.mainSubjects);

  const handleFilterRemoveOneItem = (topLevelIndex, task) => {
    const updatedMainSubject = mainSubjects[topLevelIndex][1].filter(
      (item) => item.title != task
    );
    mainSubjects[topLevelIndex].splice(1, 1, updatedMainSubject);
  };
  return { handleFilterRemoveOneItem };
}
