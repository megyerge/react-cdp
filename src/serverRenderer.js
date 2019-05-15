import React from 'react';
import { renderToString } from "react-dom/server";
import App from "./App.js"

function renderHTML(html) {
    return `
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Server side rendering</title>
            </head>
            <body>
                <div id="app">${html}</div>
                <script type="text/javascript" src="/bundle.js"></script>
            </body>
        </html>
  `;
}

export default function serverRenderer() {
    return (req, res) => {
        const htmlString = renderToString(<App />)

        res.send(renderHTML(htmlString));
    };
}