import client from "../axios/auth";
import {BASE_URL} from '../base_url';

export const getAllUsers = async () => {
  try {
    const users = await client.get(BASE_URL + '/api/admin/allUsers');
    if (!users) {
      throw Error('Error: User received from API but not correctly formatted');
    }
    return users.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteUser = async (username) => {
  try {
    const user = await client.delete(BASE_URL + `/api/admin/deleteUser/${username}`);
    if (!user) {
      throw Error('Error: User received from API but not correctly formatted');
    }
    return user.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
