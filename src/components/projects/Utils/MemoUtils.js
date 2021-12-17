// Components
import TopicsTable from "../CreateProject/TopicsTable";

// UseMemo
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
          <TopicsTable
            subject={subject}
            projectTopics={projectTopics}
            setProjectTopics={setProjectTopics}
          />
        );
      }),
    [mainSubject, projectTopics]
  );
  const secondarySubjectMemo = memo(
    () =>
      secondarySubject.map((subject, id) => {
        return (
          <TopicsTable
            subject={subject}
            projectTopics={projectTopics}
            setProjectTopics={setProjectTopics}
          />
        );
      }),
    [secondarySubject, projectTopics]
  );
  return [mainSubjectMemo, secondarySubjectMemo];
};
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
          <TopicsTable
            subject={subject}
            projectTopics={projectTopics}
            setProjectTopics={setProjectTopics}
            editableSubjects={editableSubjects}
          />
        );
      }),
    [projectTopics]
  );
  return editableTopicsMemo;
};
