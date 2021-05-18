import React from "react";
import { useDispatch, useSelector } from "react-redux";
import usePushDataToServer from "./usePushDataToServer";
import axios from "axios";
export default function useRemoveTopics() {
  const topLevelIndex = useSelector((state) => state.topLevelIndex);
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);
  const userProfileData = useSelector((state) => state.userProfileData);
  const { updateMainSubjectsInServer, updateSecondarySubjectsInServer } =
    usePushDataToServer();
  const { id } = userProfileData;
  const handleFilterRemoveOneItem = (topLevelIndex, task, subject) => {
    const updatedMainSubject = subject[topLevelIndex][1].filter(
      (item) => item.title != task
    );
    subject[topLevelIndex].splice(1, 1, updatedMainSubject);
    if (subject === mainSubjects) {
      updateMainSubjectsInServer(subject);
    } else if (subject === secondarySubjects) {
      updateSecondarySubjectsInServer(subject);
    }
  };
  return { handleFilterRemoveOneItem };
}
