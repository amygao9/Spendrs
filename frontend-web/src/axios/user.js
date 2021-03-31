import { BASE_URL } from '../base_url';
import client from './auth';

export const getUserInfo = async () => {
  try {
    const user = await client.get(BASE_URL + '/api/users');

    if (!user || user.status != 200 || typeof(user.data) == "string") {
        throw 'Error';
    }

    return user.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};