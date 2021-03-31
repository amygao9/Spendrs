import axios from 'axios';
import Cookies from 'js-cookie';

const client = axios.create()

// Interceptors take 2 parameters:
// Axios calls the first function if the request succeeds
// Axios calls the second function if the request fails
client.interceptors.request.use(
  config => {
    const jwt = Cookies.get("jwt");
    if (jwt) {
      config.headers['Authorization'] = "Bearer " + jwt;
    }
    return config
  },
  error => {
    Promise.reject(error);
  }
)

client.interceptors.response.use(
  res => res,
  err => {
    if (err.response && err.response.status === 401) {
      Cookies.remove("jwt");
      throw new Error("auth invalid")
    } else {
      throw err;
    }
});

export default client;