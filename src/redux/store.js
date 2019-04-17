import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers/reducer';

// Redux Dev Tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Combining multiple reducers
const rootReducer = combineReducers({
    reducer
});

const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(thunk))
);

export default store;