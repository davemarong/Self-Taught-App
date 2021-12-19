// Parent function which creates a copy of current project and merge it with all topics to create a editable project
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

// Create array of all topics without some properties
const createListOfAllTopics = (mainSubjects, secondarySubjects) => {
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
// Concating all topics and project topics together and creates a new array
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
// Removing duplicates from array from function "concatAllTopicsAndProjectTopics"
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
