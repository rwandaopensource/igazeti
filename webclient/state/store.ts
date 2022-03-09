import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import reducers from './reducers';
import { RootStateOrAny } from 'react-redux';

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware( logger, ...middleware ))
  }

  return applyMiddleware( ...middleware )
};

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ... state,
      ... action.payload
    }
    return nextState;
  } else {
    return reducers(state, action)
  }
}

const store = () => createStore(reducer, bindMiddleware([thunk]));

export const wrapper = createWrapper<RootStateOrAny>(store, { debug: true });