import answersReducer from "./answers";
import todo from "./todo";
import auth from "./auth";

import { combineReducers } from "redux";

const allReducer = combineReducers({
  answers: answersReducer,
  todo,
  auth,
});
export default allReducer;
