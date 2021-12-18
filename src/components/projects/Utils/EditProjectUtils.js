export const createEditableListOfTopics = (
  mainSubjects,
  secondarySubjects,
  project
) => {
  const allTopics = createListOfAllTopics(mainSubjects, secondarySubjects);
  const topicsConcated = concatAllTopicsAndProjectTopics(
    allTopics,
    project.topics
  );
  return removeDuplicatesFromAllTopics(topicsConcated);
};
const createListOfAllTopics = (mainSubjects, secondarySubjects) => {
  // Create array of all topics without some properties
  const mainSubjectTopics = mainSubjects.map((subject, id) => {
    return [
      { title: subject[0].title },
      subject[1].map((topic, id) => ({
        title: topic.title,
        learned: topic.learned,
        usedInProject: false,
      })),
    ];
  });
  const secondarySubjectTopics = secondarySubjects.map((subject, id) => {
    return [
      { title: subject[0].title },
      subject[1].map((topic, id) => ({
        title: topic.title,
        learned: topic.learned,
        usedInProject: false,
      })),
    ];
  });
  return [...mainSubjectTopics, ...secondarySubjectTopics];
};
const concatAllTopicsAndProjectTopics = (allTopics, projectTopics) => {
  return allTopics.map((subject, id) => {
    let subjectAndTopics = subject;
    for (let i = 0; i < projectTopics.length; i++) {
      if (subject[0].title === projectTopics[i][0].title) {
        subjectAndTopics = [
          subject[0],
          [...projectTopics[i][1], ...subject[1]],
        ];
        break;
      }
    }
    return subjectAndTopics;
  });
};
const removeDuplicatesFromAllTopics = (topicsConcated) => {
  return topicsConcated.map((subject, id) => {
    return [
      subject[0],
      subject[1].filter((topic, id) => {
        const indexOfTopic = subject[1].findIndex(
          (item) => topic.title === item.title
        );
        return indexOfTopic === id;
      }),
    ];
  });
};
