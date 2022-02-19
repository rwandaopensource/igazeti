import { combineReducers } from 'redux';
import lawsReducer from './lawsReducer';

const reducers = combineReducers({
  laws: lawsReducer,
})

export default reducers;