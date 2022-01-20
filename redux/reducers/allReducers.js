import { combineReducers } from "redux";
import { darkModeReducer } from "./layoutReducer";

const allReducers = combineReducers({
  darkMode: darkModeReducer,
});

export default allReducers;
