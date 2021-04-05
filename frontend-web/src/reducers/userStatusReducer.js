import client from "../axios/auth";
import { BASE_URL } from "../base_url";

const initialState = {}

export default function userStatusReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_USER_STATUS': {
      return action.payload;
    }
    case 'CLEAR_USER_STATUS': {
      return {};
    }
    default:
      return state
  }
}

export async function getUserStatus(dispatch, getState) {
  try {
    const result = await client.get(BASE_URL + '/api/users');
    dispatch({ type: "GET_USER_STATUS", payload: result.data });
    return result;
  } catch (err) {
    console.log('err :>> ', err);
  }
}