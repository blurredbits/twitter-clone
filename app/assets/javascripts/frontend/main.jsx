
import TweetBox from './components/TweetBox.jsx';
import TweetsList from './components/TweetsList.jsx';
import TweetStore from './stores/TweetStore.jsx';

import TweetActions from "./actions/TweetActions.jsx";
TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    TweetStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getAppState());
  }

  render() {
    return(
      <div className="container">
        <TweetBox />
        <TweetsList tweets={this.state.tweetsList} />
      </div>
    )
  }
};

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
