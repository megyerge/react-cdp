import React from 'react';
import { hydrate } from 'react-dom';
import App from "./App.js";
import {BrowserRouter} from "react-router-dom";
import createStore from "./redux/store";

// Create Redux store with initial state
const store = createStore(window.__PRELOADED_STATE__);


// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const root = (
	<App Router={BrowserRouter} store={store}/>
);

hydrate(root, document.getElementById('root'));