import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import rootReducer from '../reducers';

// Get a function that will create our store with middleware
let createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
