var TweetBox = React.createClass({
  render: function() {
    return(
      <div className="row">
        <form>
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
