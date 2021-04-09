import client from "../axios/auth";
import { BASE_URL } from "../base_url";

const initialState = {
  results: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "search/updateResults":
      return {
        results: action.results,
      };

    case "search/clean":
      return {
        results: [],
      };

    default:
      return state;
  }
};

export const getSearchResult = (search) => async (dispatch, getState) => {
  try {
    const result = await client.get(BASE_URL + "/api/users/findUser/" + search);

    dispatch({ type: "search/updateResults", results: result.data });
  } catch (err) {
    console.log("err :>> ", err);
  }
};

export default searchReducer;
