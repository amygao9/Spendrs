  
import { combineReducers } from 'redux';

import loggedInReducer from './loggedInReducer';
import userStatusReducer from './userStatusReducer';

const rootReducer = combineReducers({
    loggedIn: loggedInReducer,
    userStatus: userStatusReducer
});

export default rootReducer;