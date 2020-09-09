import React from 'react';
import { connect } from 'react-redux';
import { useStore } from 'react-redux';

import Tweet from '../single-tweet/single-tweet.component';
import './tweetsContainer.styles.scss';

const TweetsContainer = () => {
  const store = useStore();
  return (
    <div className="grid">
      {store.getState().tweet.tweets.map((tweet) => {
        return (
          <Tweet
            key={tweet.id}
            tweet={tweet.tweet}
            expiryDate={tweet.expiryDate}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tweet: state,
  };
};

export default connect(mapStateToProps)(TweetsContainer);
