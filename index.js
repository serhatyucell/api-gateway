const express = require("express");
const app = express();

app.use("*", function (req, res, next) {
	req.headers.serhat = "yücel";
	next();
});

app.use("/serhat", function (req, res, next) {
	res.send(req.headers);
});

app.use("*", function (req, res, next) {
	console.log("aass");
	res.status(404);
	res.send("Endpoint not found.");
});

app.listen(3000);
