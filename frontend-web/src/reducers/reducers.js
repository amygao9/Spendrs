  
import { combineReducers } from 'redux';

import loggedInReducer from './loggedInReducer';
import postsReducer from './postsReducer';
import userDataReducer from './userDataReducer';

const rootReducer = combineReducers({
    loggedIn: loggedInReducer,
    userData: userDataReducer,
    postsData: postsReducer,
});

export default rootReducer;