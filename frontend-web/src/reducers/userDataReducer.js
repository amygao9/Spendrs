import client from "../axios/auth";
import { BASE_URL } from "../base_url";

const initialState = {};

export default function userDataReducer(state = initialState, action) {
  switch (action.type) {
    case "userData/userStatus": {
      return action.payload;
    }

    default:
      return state;
  }
}

export const getUserData = async (dispatch, getState) => {
  try {
    const user = await client.get(BASE_URL + "/api/users");
    dispatch({ type: "userData/userStatus", payload: user.data });
    return user.data;
  } catch (err) {
    console.log("err :>> ", err);
    throw err;
  }
};

export const getOtherUserData = (username) => async (dispatch, getState) => {
  try {
    const user = await client.get(BASE_URL + `/api/users/profile/${username}`);
    return user.data;
  } catch (err) {
    console.log("err :>> ", err);
    return { err: err.response.data.err };
  }
};

export const checkFollowing = (username) => async (dispatch, getState) => {
  try {
    const result = await client.get(
      BASE_URL + `/api/users/following/${username}`
    );
    return result.data.following;
  } catch (err) {
    console.log("err :>> ", err);
    return false;
  }
};

export const updateUser = (data) => async (dispatch, getState) => {
  try {
    const result = await client.put(BASE_URL + "/api/users/update", data);
    console.log("result.data :>> ", result.data);
    dispatch({ type: "userData/userStatus", payload: result.data });
    return result.data;
  } catch (err) {
    console.log("err.response.data.err :>> ", err.response.data.err);
    return { err: err.response.data.err };
  }
};

export const uploadProfilePic = (form) => async (dispatch, getState) => {
  try {
    const picture = new FormData(form)
    await client.post(BASE_URL + '/api/users/upload/profile_pic', picture);
    dispatch(getUserData);
  } catch (err) {
    console.log(err);
  }
}

export const changePassword = (oldPass, password, confirmPass, passwordStrength) => async (dispatch, getState) => {
  try {
    const user = await client.patch(BASE_URL + '/api/users/changePassword', {"oldPass": oldPass, "password": password, "confirmPass": confirmPass, "passwordStrength": passwordStrength});

    if (!user ||  typeof(user.data) == "string") {
      console.log(user)
      throw Error('Error: User received from API but not correctly formatted');
    }
    console.log('user.data :>> ', user.data);
    return user.data;
  } catch (err) {
    console.log(err);
    alert("Error changing user password!");
  }
}

export const deleteUser = async (dispatch, useState) => {
  try {
    const user = await client.delete(BASE_URL + '/api/users/deleteUser');

    if (!user || user.status !== 200 || typeof(user.data) == "string") {
      console.log(user)
      throw Error('Error: User received from API but not correctly formatted');
    }
    return user.data;
  } catch (err) {
    console.log(err);
    return { err: err };
  }
}

