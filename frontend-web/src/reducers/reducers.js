  
import { combineReducers } from 'redux';

import userStatusReducer from './userStatusReducers';

const rootReducer = combineReducers({
    userStatus: userStatusReducer
});

export default rootReducer;