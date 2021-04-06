import {BASE_URL} from "../base_url";
import client from "./auth";

export const apiPost = async (post) => {
  try {
    const result = await client.post(BASE_URL + '/api/posts', post);
    console.log(result);
  } catch (err) {
    console.log(err.response.data.err)
    throw err.response.data.err; // throw the response body
  }
}

export const apiGetAllUserPosts = async () => {
  try {
    const result = await client.get(BASE_URL + '/api/posts');
    console.log(result.data);
    return result.data
  } catch (err) {
    console.log(err.response.data.err)
    throw err.response.data.err; // throw the response body
  }
}

export const apiMakeComment = async (postId, comment) => {
  try {
    console.log("comment ", postId, comment)
    const result = await client.post(BASE_URL + `/api/posts/${postId}/comment`, {comment: comment});
    console.log(result.data);
    return result.data
  } catch (err) {
    console.log(err.response.data.err)
    throw err.response.data.err; // throw the response body
  }
}