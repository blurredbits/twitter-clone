var Tweet = React.createClass({
  render: function() {
    return(
      <li className="collection-item avatar">
        <img className="circle" src={this.props.gravatar} />
        <span className="title">{this.props.name}</span>
        <span className="time">{this.props.formattedDate}</span>
        <p>{this.props.body}</p>
      </li>
    )
  }
})
