import { combineReducers } from "redux";
import mainSubjects from "./mainSubjects";
import topLevelIndex from "./topLevelIndex";
import secondarySubjects from "./secondarySubjects";
import subjectType from "./subjectType";

const allReducers = combineReducers({
  mainSubjects: mainSubjects,
  topLevelIndex: topLevelIndex,
  secondarySubjects: secondarySubjects,
  subjectType: subjectType,
});
export default allReducers;
