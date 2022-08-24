import { combineReducers } from "redux";
import exercises from './exercises';
import auth from './auth';
import nutrition from "./nutrition";

export default combineReducers({
    exercises,
    auth,
    nutrition
});