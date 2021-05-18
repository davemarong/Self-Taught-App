import { combineReducers } from "redux";
import mainSubjects from "./mainSubjects";
import topLevelIndex from "./topLevelIndex";
import secondarySubjects from "./secondarySubjects";
import subjectType from "./subjectType";
import userProfileData from "./userProfileData";
import isLogged from "./isLogged";

const allReducers = combineReducers({
  mainSubjects: mainSubjects,
  topLevelIndex: topLevelIndex,
  secondarySubjects: secondarySubjects,
  subjectType: subjectType,
  userProfileData: userProfileData,
  isLogged: isLogged,
});
export default allReducers;
