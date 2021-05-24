import React, { useRef } from "react";

import mainSubjectVideo from "../../assets/MainSubjects.mp4";
import sideSubjectVideo from "../../assets/sideSubjects.mp4";
import topicsVideo from "../../assets/TopicsBig.mp4";
import createSubjectVideo from "../../assets/CreateMainSubject.mp4";
import editSubjectVideo from "../../assets/EditSubject.mp4";
import overviewVideo from "../../assets/overviewVideo.mp4";

export default function IntroductionData() {
  const videoPlay0 = useRef(null);
  const videoPlay1 = useRef(null);
  const videoPlay2 = useRef(null);
  const videoPlay3 = useRef(null);
  const videoPlay4 = useRef(null);
  const videoPlay5 = useRef(null);

  const introductionData = [
    {
      title: "Welcome",
      description:
        "This is just a quick introduction to get you started and accelerate your coding journey.",
      src: overviewVideo,
      ref: videoPlay0,
    },
    {
      title: "Main subjects",
      description:
        "These boxes represent programming languages and frameworks. HTML, CSS, JavaScript, React, Vue ect... ",
      src: mainSubjectVideo,
      ref: videoPlay1,
    },
    {
      title: "Side subjects",
      description:
        "These boxes represent all others subjects. Such as Debugging, Browsers, Version control, hosting, Command line, ect… ",
      src: sideSubjectVideo,
      ref: videoPlay2,
    },
    {
      title: "Topics",
      description:
        "Each subject has multiple “Topics” inside them, and this is how you will track and organize your progress. For example, if your subject was “Pizza”, then your topics could be: Cheese, Tomato, Pineapple, and pepperoni.  ",
      src: topicsVideo,
      ref: videoPlay3,
    },
    {
      title: "Create subject",
      description:
        "Click “Create new” to create a new subject, give it a name and add as many topics as you need. Then hit “Save”.",
      src: createSubjectVideo,
      ref: videoPlay4,
    },
    {
      title: "Edit subject",
      description:
        "Click on any “Subject-box” to view details. You can mark a topic as “Learned”, you can delete topics or create new topics. ",
      src: editSubjectVideo,
      ref: videoPlay5,
    },
  ];
  return { introductionData };
}
