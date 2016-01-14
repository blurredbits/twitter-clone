import AppDispatcher from "../dispatcher.jsx";
import ActionTypes from "../constants.jsx";

export default {
  receivedTweets(rawTweets) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets
    })
  },
  receivedOneTweet(rawTweet) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      rawTweet
    })
  }
}
