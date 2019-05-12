import express from "express";
import React from 'react';
import { renderToString } from "react-dom/server";
import App from "../App.js"

const app = express;

app.use(express.static("public"));

app.get("*", (req, res) => {
	res.send(`
		<!DOCTYPE html>
			<head>
				<title>Universal react</title>
				<link rel="stylesheet" href="css/index.css">
			</head>
			<body>
				<div id="root">${renderToString(<App />)}</div>
			</body>
		</html>
	`)
})

app.listen(process.env.PORT || 3000, () => {
	console.log("Server is listening");
})