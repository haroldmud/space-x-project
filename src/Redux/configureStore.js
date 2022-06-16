import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketReducer from './Rockets/Rockets';
import MissionsReducer from './Missions/missions';

const reducer = combineReducers({
  rocketReducer,
  MissionsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
