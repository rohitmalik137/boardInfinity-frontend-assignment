import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import tweetReducer from './tweet/tweet.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tweet'],
};

const rootReducer = combineReducers({
  tweet: tweetReducer,
});

export default persistReducer(persistConfig, rootReducer);
