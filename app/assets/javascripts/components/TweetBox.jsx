var TweetBox = React.createClass({
  sendTweet: function(e) {
    e.preventDefault();
    this.props.sendTweet(this.refs.tweetTextArea.value);
    this.refs.tweetTextArea.value = '';
  },

  render: function() {
    return(
      <div className="row">
        <form onSubmit={this.sendTweet}>
          <div className="input-field">
            <textarea ref="tweetTextArea" className="materialize-textarea" />
            <label>What's happening?</label>
            <button type="submit" className="btn right">Tweet</button>
          </div>
        </form>
      </div>
    )
  }
})
