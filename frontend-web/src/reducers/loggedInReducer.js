import axios from 'axios';
import Cookies from 'js-cookie'
import {BASE_URL} from '../base_url';


const initialState = {
  loggedIn: false,
  admin: false
};

const loggedInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loggedIn: true
      }

    // case "LOGOUT":
    //   return {
    //     ...state,
    //     loggedIn: false,
    //   }

    case "USER_TYPE":
      return {
        ...state,
        admin: action.payload.admin
      }

    default:
      return state;
  }
}


export const login = (username, password) => async (dispatch, getState) => {
  try {
    console.log('username :>> ', username);
    const user = await axios.post(BASE_URL + '/api/login', {
      username, password
    });

    if (!user || user.status !== 200) {
      throw Error('Unable to login');
    }

    Cookies.set('jwt', user.data.jwt);
    dispatch({ type: 'LOGIN' });
    return user.data.admin ? "admin" : "user";
  } catch (err) {
    console.log('err :>> ', err.response.data.err);
    throw err.response.data.err;
  }
}

export const signup = (name, email, username, password, passwordStrength) => async (dispatch, getState) => {
  try {
    const user = await axios.post(BASE_URL + '/api/signup', {
        name,
        email,
        username,
        password,
        passwordStrength
    });

    if (!user || user.status !== 200 || typeof(user.data) == "string") {
        throw Error('Could not create new user.');
    }

    Cookies.set('jwt', user.data.jwt);
    dispatch({ type: 'LOGIN' });
  } catch (err) {
    console.log(err.response.data.err)
    throw err.response.data.err; // throw the response body
  }
}


export default loggedInReducer;