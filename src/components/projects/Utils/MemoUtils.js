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
const createEditSubjectsMemo = () => {};

// const TopicsTableSecondarySubjectsMemo = useMemo(
//   () =>
//     secondarySubjects.map((subject, id) => {
//       return (
//         <TopicsTable
//           subject={subject}
//           projectTopics={projectTopics}
//           setProjectTopics={setProjectTopics}
//         />
//       );
//     }),
//   [secondarySubjects, projectTopics]
// );
