import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useRemoveTopics() {
  const topLevelIndex = useSelector((state) => state.topLevelIndex);
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);

  const handleFilterRemoveOneItem = (topLevelIndex, task, subject) => {
    const updatedMainSubject = subject[topLevelIndex][1].filter(
      (item) => item.title != task
    );
    subject[topLevelIndex].splice(1, 1, updatedMainSubject);
  };
  return { handleFilterRemoveOneItem };
}
