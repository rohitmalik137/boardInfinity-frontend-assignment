import React from 'react';
import { connect } from 'react-redux';

import Tweet from '../single-tweet/single-tweet.component';
import './tweetsContainer.styles.scss';

class TweetsContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>TweetsContainer</h1>
        {this.props.tweet.tweet.tweets.map((tweet) => {
          return <Tweet key={tweet.id} tweet={tweet.tweet} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tweet: state,
  };
};

export default connect(mapStateToProps)(TweetsContainer);
