import React from 'react';
import { renderToString } from "react-dom/server";
import App from "./App.js";
import {StaticRouter} from "react-router-dom";
import createStore from "./redux/store.js";

function renderHTML(html, preloadedState) {
    return `
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Server side rendering</title>
            </head>
            <body>
                <div id="root">${html}</div>
                <script>
                    // WARNING: See the following for security issues around embedding JSON in HTML:
                    // http://redux.js.org/recipes/ServerRendering.html#security-considerations
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
                        /</g,
                        '\\\\\u003c'
                    )};
                </script>

                <script type="text/javascript" src="/js/main.js"></script>
            </body>
        </html>
  `;
}

export default function serverRenderer() {
    return (req, res) => {
        const store = createStore(),
            renderApp = () => <App Router={StaticRouter} location={req.url} store={store}>Server side</App>,
            htmlString = renderToString(renderApp()),
            preloadedState = store.getState();

            console.log(htmlString);
            res.send(renderHTML(htmlString, preloadedState));
    };
}