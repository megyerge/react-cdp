import React from 'react';
import { hydrate } from 'react-dom';
import App from "./App.js";

const root = (
	<App />
);

hydrate(root, document.getElementById('root'));