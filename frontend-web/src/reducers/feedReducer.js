import client from "../axios/auth";
import { BASE_URL } from "../base_url";

const initialState = {
  posts: [],
  date: null
};

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FEED":
      return action.payload;

    default:
      return state;
  }
}


export async function getFeed(dispatch, getState) {
  try {
    const state = getState();
    const { posts, date } = state.feedData;

    const result = await client.get(BASE_URL + '/api/feed/newsfeed', {
      params: {
        num: 5,
        date: date
      }
    });
    // console.log('posts :>> ', posts);
    // console.log('result.data.posts :>> ', result.data.posts);
    const newPosts = posts.concat(result.data.posts);
    console.log('newPosts :>> ', newPosts);
    dispatch({ type: "GET_FEED", payload: {
      posts: newPosts,
      date: result.data.date
    } });
    return result;
  } catch (err) {
    console.log('err :>> ', err);
  }
}

export default feedReducer;