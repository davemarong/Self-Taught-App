import { combineReducers } from "redux";
import mainSubjects from "./mainSubjects";
const allReducers = combineReducers({
  mainSubjects: mainSubjects,
});
export default allReducers;
