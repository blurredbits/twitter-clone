var Main = React.createClass({
  getInitialState: function() {
    return { tweetsList: [] };
  },

  formattedTweets(tweetsList) {
    let formattedList = tweetsList.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    });
    return {
      tweetsList: formattedList
    }
  },

  addTweet: function(tweetToAdd) {
    $.post("/tweets", { body: tweetToAdd } )
    .success( savedTweet => {
      let newTweetsList = this.state.tweetsList;
      newTweetsList.unshift(savedTweet);
      this.setState(this.formattedTweets(newTweetsList));
    })
    .error(error => console.log(error))
  },

  componentDidMount: function() {
    $.ajax("/tweets")
    .success(data => this.setState(this.formattedTweets(data)))
    .error(error => console.log(error))
  },

  render: function() {
    return(
      <div className="container">
        <TweetBox sendTweet={this.addTweet} />
        <TweetsList tweets={this.state.tweetsList} />
      </div>
    );
  }
})
