import client from "../axios/auth";
import {BASE_URL} from '../base_url';

export const getAllUsers = async () => {
  try {
    const users = await client.get(BASE_URL + '/api/admin/allUsers');
    if (!users) {
      console.log(users)
      throw Error('Error: User received from API but not correctly formatted');
    }
    console.log(users.data)
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
      console.log(user)
      throw Error('Error: User received from API but not correctly formatted');
    }
    console.log(user.data)
    return user.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
