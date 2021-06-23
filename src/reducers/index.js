import answersReducer from "./answers";
import todo from "./todo";

import { combineReducers } from "redux";

const allReducer = combineReducers({
  answers: answersReducer,
  todo,
});
export default allReducer;
