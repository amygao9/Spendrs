import { BASE_URL } from '../base_url';
import client from './auth';

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
    alert("Error loading user data!")
    // throw err;
  }
};

export const deleteUser = async () => {
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
    alert("Error loading user data!")
    // throw err;
  }
};