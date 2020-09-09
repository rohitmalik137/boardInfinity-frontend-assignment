const INITIAL_STATE = {
  tweets: [],
};

const tweetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'POST_TWEET':
      return {
        ...state,
        tweets: [action.newTweet, ...state.tweets],
      };
    default:
      return state;
  }
};

export default tweetReducer;
