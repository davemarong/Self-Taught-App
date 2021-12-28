import React from "react";
// Components

import TopicsTable from "../CreateProject/TopicsTable";

// UseMemo
// Creating memos of "TopicTable" components because of performance (to many re-renders)
// mainsubject and secondary subject topics
export const createSubjectsMemo = (
  memo,
  mainSubject,
  secondarySubject,
  projectTopics,
  setProjectTopics
) => {
  console.log("main/second");
  const mainSubjectMemo = memo(
    () =>
      mainSubject.map((subject, id) => {
        return (
          <React.Fragment key={id}>
            <TopicsTable
              subject={subject}
              projectTopics={projectTopics}
              setProjectTopics={setProjectTopics}
            />
          </React.Fragment>
        );
      }),
    [mainSubject, projectTopics]
  );
  const secondarySubjectMemo = memo(
    () =>
      secondarySubject.map((subject, id) => {
        return (
          <React.Fragment key={id}>
            <TopicsTable
              subject={subject}
              projectTopics={projectTopics}
              setProjectTopics={setProjectTopics}
            />
          </React.Fragment>
        );
      }),
    [secondarySubject, projectTopics]
  );
  return [mainSubjectMemo, secondarySubjectMemo];
};
// Editable subject topics
export const createEditableSubjectsMemo = (
  memo,
  editableSubjects,
  projectTopics,
  setProjectTopics
) => {
  console.log("editable");

  const editableTopicsMemo = memo(
    () =>
      editableSubjects.map((subject, id) => {
        return (
          <React.Fragment key={id}>
            <TopicsTable
              subject={subject}
              projectTopics={projectTopics}
              setProjectTopics={setProjectTopics}
              editableSubjects={editableSubjects}
            />
          </React.Fragment>
        );
      }),
    [projectTopics]
  );
  return editableTopicsMemo;
};
