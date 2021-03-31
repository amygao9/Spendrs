import axios from 'axios';
import Cookies from 'js-cookie'
import { BASE_URL } from '../base_url';

export const apiLogin = async (username, password) => {
  try {
    const user = await axios.post(BASE_URL + '/api/login', {
      username, password
    })
    console.log('user :>> ', user);

    if (!user || user.status != 200) {
      throw 'Unable to login';
    }

    Cookies.set('jwt', user.data.jwt);
    return user.data.admin ? "admin" : "user";
  } catch (err) {
    console.log('err :>> ', err);
    throw err;
  }
}

export const apiSignup = async (name, email, username, password) => {
  try {
    const user = await axios.post(BASE_URL + '/api/signup', {
        name,
        email,
        username,
        password,
    });

    if (!user || user.status != 200 || typeof(user.data) == "string") {
        throw 'Could not create new user.';
    }

    console.log('user :>> ', user);

    Cookies.set('jwt', user.data.jwt);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

