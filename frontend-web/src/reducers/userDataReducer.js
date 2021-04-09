import client from "../axios/auth";
import { BASE_URL } from "../base_url";

const initialState = {}

export default function userDataReducer(state = initialState, action) {
  switch (action.type) {
    case 'userData/userStatus': {
      return action.payload;
    }
    
    default:
      return state
  }
}

export const getUserData = async (dispatch, getState) => {
  try {
    const user = await client.get(BASE_URL + '/api/users');
    dispatch({ type: "userData/userStatus", payload: user.data });
    return user.data;
  } catch (err) {
    console.log('err :>> ', err);
    throw err;
  }
}
export const getOtherUserData = (username) => async (dispatch, getState) => {
  try {
    const user = await client.get(BASE_URL + `/api/users/${username}`);
    console.log('user :>> ', user);
    return user.data;
  } catch (err) {
    console.log('err :>> ', err);
    return {err: err.response.data.err};
  }
}

export const updateUser = (data) => async (dispatch, getState) => {
  try {
    const result = await client.put(BASE_URL + '/api/users/update', data);
    console.log('result.data :>> ', result.data);
    dispatch({ type: "userData/userStatus", payload: result.data });
    return result.data;
  } catch (err) {
    console.log('err.response.data.err :>> ', err.response.data.err);
    return {err: err.response.data.err};
  }
}
