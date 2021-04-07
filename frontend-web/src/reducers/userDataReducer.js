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

export async function getUserData(dispatch, getState) {
  try {
    const result = await client.get(BASE_URL + '/api/users');
    dispatch({ type: "userData/userStatus", payload: result.data });
    return result;
  } catch (err) {
    console.log('err :>> ', err);
    throw err;
  }
}