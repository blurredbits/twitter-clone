var TweetsList = React.createClass({
  render: function() {
    let tweets = this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet}/>);
    return(
      <div>
        <ul className="collection">
          {tweets}
        </ul>
      </div>
    )
  }
})
