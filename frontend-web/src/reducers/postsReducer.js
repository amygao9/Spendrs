import client from "../axios/auth";
import { BASE_URL } from "../base_url";

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return action.payload;

    default:
      return state;
  }
}


export async function getPosts(dispatch, getState) {
  try {
    const state = getState();
    console.log('state :>> ', state);
    const posts = state.postsData.posts;
    const time = posts.length > 0 ? posts[posts.length - 1].time : null;

    const result = await client.get(BASE_URL + '/api/posts');
    console.log('result.data :>> ', result.data);
    dispatch({ type: "GET_POSTS", payload: result.data });
    return result;
  } catch (err) {
    console.log('err :>> ', err);
  }
}

export default postsReducer;