  
import { combineReducers } from 'redux';

import loggedInReducer from './loggedInReducer';
import postsReducer from './postsReducer';
import userDataReducer from './userDataReducer';

const appReducer = combineReducers({
    loggedIn: loggedInReducer,
    userData: userDataReducer,
    postsData: postsReducer,
});

const rootReducer = (state, action) => {
    if (action.type === 'home/logout') {
        console.trace();
        state = undefined;
    }
  
    return appReducer(state, action);
}

export default rootReducer;