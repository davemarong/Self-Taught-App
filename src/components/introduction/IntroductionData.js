import mainSubjectVideo from "../../assets/MainSubjects.mp4";
import sideSubjectVideo from "../../assets/sideSubjects.mp4";
import topicsVideo from "../../assets/TopicsBig.mp4";
import createSubjectVideo from "../../assets/CreateMainSubject.mp4";
import editSubjectVideo from "../../assets/EditSubject.mp4";

const introductionData = [
  {
    title: "Main subject",
    description:
      "These boxes represent programming languages. HTML, CSS, JavaScript. ",
    src: mainSubjectVideo,
  },
  {
    title: "Side subject",
    description:
      "These boxes represent all others subject. Such as Debugging, Browsers, Version control, hosting ect… ",
    src: sideSubjectVideo,
  },
  {
    title: "Topics",
    description:
      "Each subject has multiple “Topics” inside them, and this is how you will track and organize your progress. For example, if your subject was “Pizza”, then your topics could be: Cheese, Tomato, Pineapple, and pepperoni.  ",
    src: topicsVideo,
  },
  {
    title: "Create subject",
    description:
      "Click “Create new” to create a new subject, give it a name and add as many topics as you need. Then hit “Save”.",
    src: createSubjectVideo,
  },
  {
    title: "Edit subject",
    description:
      "Click on any “Subject-box” to view details. You can check of a topic as “Learned”, you can delete topics or add new topics. ",
    src: editSubjectVideo,
  },
];
export default introductionData;
