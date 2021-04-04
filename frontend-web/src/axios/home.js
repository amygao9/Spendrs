import axios from 'axios';
import Cookies from 'js-cookie'
import {BASE_URL} from '../base_url';

export const apiLogin = async (username, password) => {
  try {
    const user = await axios.post(BASE_URL + '/api/login', {
      username, password
    })

    if (!user || user.status !== 200) {
      throw Error('Unable to login');
    }


    Cookies.set('jwt', user.data.jwt);
    return user.data.admin ? "admin" : "user";
  } catch (err) {
    console.log('err :>> ', err.response.data.err);
    throw err.response.data.err;
  }
}

export const apiSignup = async (name, email, username, password, passwordStrength) => {
  try {
    const user = await axios.post(BASE_URL + '/api/signup', {
        name,
        email,
        username,
        password,
        passwordStrength
    });

    if (!user || user.status !== 200 || typeof(user.data) == "string") {
        throw Error('Could not create new user.');
    }

    Cookies.set('jwt', user.data.jwt);
  } catch (err) {
    console.log(err.response.data.err)
    throw err.response.data.err; // throw the response body
  }
}

