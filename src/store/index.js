import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// will normally be importing several reducers 
// and need to combine them using combineReducers;
import { reducer } from './getAstronauts';

// Construct our Redux store;
const logger = createLogger({ collapsed: true });
const middleware = applyMiddleware(thunkMiddleware, logger);

const store = createStore(reducer, middleware);

// Export our store by default, which will be provided to and injected within our entire application;
export default store;