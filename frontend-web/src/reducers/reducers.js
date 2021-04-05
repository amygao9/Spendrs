  
import { combineReducers } from 'redux';

import loggedInReducer from './loggedInReducer';
import postsReducer from './postsReducer';
import feedReducer from './feedReducer';
import userDataReducer from './userDataReducer';

const rootReducer = combineReducers({
    loggedIn: loggedInReducer,
    userData: userDataReducer,
    feedData: feedReducer,
});

export default rootReducer;