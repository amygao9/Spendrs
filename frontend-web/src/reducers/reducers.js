import { combineReducers } from "redux";

import loggedInReducer from "./loggedInReducer";
import postsReducer from "./postsReducer";
import userDataReducer from "./userDataReducer";
import searchReducer from "./searchReducer";

const appReducer = combineReducers({
  loggedIn: loggedInReducer,
  userData: userDataReducer,
  postsData: postsReducer,
  searchData: searchReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "home/logout") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
