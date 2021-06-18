import dateReducer from './dateReducer';
import getDateReducer from './getDateReducer';
import weatherReducer from './weatherReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  date: dateReducer,
  week: getDateReducer,
  weather: weatherReducer,
});
