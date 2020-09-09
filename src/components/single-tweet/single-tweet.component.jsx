import React from 'react';

import './single-tweet.styles.scss';

const Tweet = ({ tweet }) => {
  return (
    <div>
      <h2>{tweet}</h2>
    </div>
  );
};

export default Tweet;
