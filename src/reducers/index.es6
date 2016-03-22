import { combineReducers } from 'redux';
// NOTE: import each of your application's reducers here
import data from './data';

const rootReducer = combineReducers({
    data
    // NOTE: add each reducer to this list
});

export default rootReducer;
