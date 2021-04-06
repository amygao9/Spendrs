import client from "../axios/auth";
import { apiMakeComment } from "../axios/posts";
import { BASE_URL } from "../base_url";

const initialState = {
  feedPosts: [],
  date: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FEED":
      return {
        ...state,
        feedPosts: action.payload.feedPosts,
      };

    case "UPDATE_DATE":
      return {
        ...state,
        date: action.payload.date,
      };

    default:
      return state;
  }
};

export async function getInitialFeed(dispatch, getState) {
  try {
    const state = getState();
    const { feedPosts, date } = state.postsData;

    const result = await client.get(BASE_URL + "/api/feed/newsfeed", {
      params: {
        num: 5,
        date: date,
      },
    });

    // const newPosts = feedPosts.concat(result.data.posts);
    dispatch({
      type: "UPDATE_FEED",
      payload: { feedPosts: result.data.posts },
    });
    dispatch({ type: "UPDATE_DATE", payload: { date: result.data.date } });
  } catch (err) {
    console.log("err :>> ", err);
  }
}

export async function fetchFeedContent(dispatch, getState) {
  try {
    const state = getState();
    const { feedPosts, date } = state.postsData;

    const result = await client.get(BASE_URL + "/api/feed/newsfeed", {
      params: {
        num: 5,
        date: date,
      },
    });

    const newPosts = feedPosts.concat(result.data.posts);
    dispatch({
      type: "UPDATE_FEED",
      payload: { feedPosts: result.data.posts },
    });
    dispatch({ type: "UPDATE_DATE", payload: { date: result.data.date } });
  } catch (err) {
    console.log("err :>> ", err);
  }
}

export const createPost = (post) => async (dispatch, getState) => {
  try {
    const state = getState();
    const { feedPosts } = state.postsData;

    const result = await client.post(BASE_URL + "/api/posts", post);
    feedPosts.unshift(result.data);

    dispatch({ type: "UPDATE_FEED", payload: { feedPosts: [...feedPosts] } });
  } catch (err) {
    console.log("err :>> ", err);
  }
};

export const likePost = (post) => async (dispatch, getState) => {
  try {
    const state = getState();
    const { feedPosts } = state.postsData;
    const postsArray = feedPosts;

    const result = await client.put(BASE_URL + "/api/posts/like", {
      post: post,
    });

    let index = -1;
    for (let i = 0; i < feedPosts.length; i++) {
      if (feedPosts[i]._id == post) {
        index = i;
        break;
      }
    }

    if (index == -1) {
      return;
    }

    postsArray.splice(index, 1);
    postsArray.splice(index, 0, result.data);

    dispatch({ type: "UPDATE_FEED", payload: { feedPosts: [...postsArray] } });
  } catch (err) {
    console.log("err :>> ", err);
  }
};

export const commentOnPost = (post, message) => async (dispatch, getState) => {
  try {
    const state = getState();
    const { feedPosts } = state.postsData;
    const postsArray = feedPosts;

    const result = await apiMakeComment(post, message);

    let index = -1;
    for (let i = 0; i < feedPosts.length; i++) {
      if (feedPosts[i]._id == post) {
        index = i;
        break;
      }
    }

    if (index == -1) {
      return;
    }

    postsArray.splice(index, 1);
    postsArray.splice(index, 0, result);

    dispatch({ type: "UPDATE_FEED", payload: { feedPosts: [...postsArray] } });
  } catch (err) {
    console.log("err :>> ", err);
  }
};

export default postsReducer;
