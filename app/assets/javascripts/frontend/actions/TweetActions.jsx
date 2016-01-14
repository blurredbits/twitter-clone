import API from '../API.jsx'

export default {
  getAllTweets() {
    API.getAllTweets();
  },
  sendTweet(body) {
    API.createTweet(body);
  }
}
