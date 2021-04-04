
const initialState = {
  loggedIn: false
};

const loggedInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("LOGGING IN");
      console.log('state :>> ', state);
      return {
        ...state,
        loggedIn: true
      }

    case "LOGOUT":
      console.log('state :>> ', state);
      return {
        ...state,
        loggedIn: false,
      }

    default:
      return state;
  }
}

export default loggedInReducer;