import { combineReducers } from "redux";
import mainSubjects from "./mainSubjects";
import topLevelIndex from "./topLevelIndex";

const allReducers = combineReducers({
  mainSubjects: mainSubjects,
  topLevelIndex: topLevelIndex,
});
export default allReducers;
