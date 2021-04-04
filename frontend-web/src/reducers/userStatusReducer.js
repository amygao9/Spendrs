import client from "../axios/auth";
import { BASE_URL } from "../base_url";

const initialState = {}

export default function userStatusReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_USER_STATUS': {
      return action.payload;
    }
    default:
      return state
  }
}

export async function getUserStatus(dispatch, getState) {
  const result = await client.get(BASE_URL + '/api/users');
  console.log('result :>> ', result);
  dispatch({ type: "GET_USER_STATUS", payload: result.data });
}