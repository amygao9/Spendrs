import client from './auth';

export const getUserInfo = async () => {
  try {
    const user = await client.get('/api/users');

    if (!user || user.status != 200 || typeof(user.data) == "string") {
        throw 'Could not get email';
    }

    return user.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};