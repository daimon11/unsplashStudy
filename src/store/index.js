import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenMiddleware, tokenReducer } from './tokenReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  tokenReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk))
);

