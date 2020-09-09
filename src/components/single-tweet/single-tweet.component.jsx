import React from 'react';

import './single-tweet.styles.scss';

const Tweet = ({ tweet, expiryDate }) => {
  return (
    <div className="single-tweet-container">
      <div className="single-tweet__side single-tweet--front">{tweet}</div>
      <div className="single-tweet__side single-tweet--back">
        <strong>Expire at:</strong> {expiryDate}
      </div>
    </div>
  );
};

export default Tweet;
