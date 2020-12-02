import { combineReducers } from 'redux';
import { weatherReducer as weather } from './weatherReducer'


const rootReducer = combineReducers({
  weather
});

export default rootReducer;