import client from "../axios/auth";
import { apiMakeComment } from "../axios/posts";
import { BASE_URL } from "../base_url";
import { getUserData } from "./userDataReducer";

const initialState = {
  feedPosts: [],
  date: null,
  finishedLoading: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "posts/updateFeed":
      return {
        ...state,
        feedPosts: action.payload.feedPosts,
      };

    case "posts/updateDate":
      return {
        ...state,
        date: action.payload.date,
      };

    case "posts/finishedLoading":
      return {
        ...state,
        finishedLoading: true
      };

    default:
      return state;
  }
};

export async function getInitialFeed(dispatch, getState) {
  try {
    const result = await client.post(BASE_URL + '/api/feed/newsfeed', {
      num: 5
    });

    dispatch({
      type: "posts/updateFeed",
      payload: { feedPosts: result.data.posts },
    });
    dispatch({ type: "posts/updateDate", payload: { date: result.data.date } });
  } catch (err) {
    console.log("err :>> ", err);
  }
}

export async function loadFeedContent(dispatch, getState) {
  // load 5 additional posts when called
  try {
    const state = getState();
    const { feedPosts, date } = state.postsData;

    const result = await client.post(BASE_URL + "/api/feed/newsfeed", {
      num: 5,
      date: date,
    });

    if (result.data.posts.length === 0) {
      dispatch({ type: "posts/finishedLoading" });
    }

    const newPosts = feedPosts.concat(result.data.posts);
    dispatch({ type: "posts/updateFeed", payload: { feedPosts: [...newPosts] } });
    dispatch({ type: "posts/updateDate", payload: { date: result.data.date } });
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

    dispatch({ type: "posts/updateFeed", payload: { feedPosts: [...feedPosts] } });
    dispatch(getUserData);
  } catch (err) {
    console.log("err :>> ", err);
  }
};

export const deletePost = (post) => async (dispatch, getState) => {
  try {
    const state = getState();
    const { feedPosts } = state.postsData;
    console.log('post :>> ', post);

    await client.delete(BASE_URL + "/api/posts/" , {
      data: {
        post: post
      }
    });

    const postIndex = feedPosts.findIndex(p => p._id === post);
    feedPosts.splice(postIndex, 1);

    dispatch({ type: "posts/updateFeed", payload: { feedPosts: [...feedPosts] } });
    dispatch(getUserData);
    return "Post successfully deleted!";
  } catch (err) {
    console.log("err :>> ", err);
    return "Error deleting post.";
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
      if (feedPosts[i]._id === post) {
        index = i;
        break;
      }
    }

    if (index === -1) {
      return;
    }

    postsArray.splice(index, 1);
    postsArray.splice(index, 0, result.data);

    dispatch({ type: "posts/updateFeed", payload: { feedPosts: [...postsArray] } });
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
      if (feedPosts[i]._id === post) {
        index = i;
        break;
      }
    }

    if (index === -1) {
      return;
    }

    postsArray.splice(index, 1);
    postsArray.splice(index, 0, result);

    dispatch({ type: "posts/updateFeed", payload: { feedPosts: [...postsArray] } });
  } catch (err) {
    console.log("err :>> ", err);
  }
};

export default postsReducer;
