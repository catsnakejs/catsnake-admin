import {combineReducers} from 'redux';
import {routeReducer} from 'redux-simple-router';
import {reducer as formReducer} from 'redux-form';
import {global} from './global';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routeReducer,
  /* your reducers */
  global
});

export default rootReducer;
