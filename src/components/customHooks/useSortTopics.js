import React from "react";
// import usePushDataToServer from "./usePushDataToServer";
import { useDispatch, useSelector } from "react-redux";
// import useAddTopics from "./useAddTopics";
export default function useSortTopics() {
  //   const { handlePushInfoToRedux } = useAddTopics();
  //   const { updateMainSubjectsInServer, updateSecondarySubjectsInServer } =
  //     usePushDataToServer();

  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);

  const handleSortTopicsByName = (subjectIndex, subject, sortCategory) => {
    const sorting = (a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    };
    if (subject === "mainsubject") {
      mainSubjects[subjectIndex][1].sort(sorting);
    } else if (subject === "secondarysubject") {
      secondarySubjects[subjectIndex][1].sort(sorting);
    }
  };
  return { handleSortTopicsByName };
}
