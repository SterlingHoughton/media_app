import "source-map-support/register";

import express from "express";
import http from "http";
import socketIo from "socket.io";

const isDevelopment = process.env.NODE_ENV !== "production";

//SETUP
const app = express();
const server = new http.Server(app);
const io = socketIo(server);

//CLIENT WEBPACK

//EXPRESS CONFIG
app.set("view engine", "pug");
app.use(express.static("public"));

const useExternalStyles = !isDevelopment;
app.get("/", (reqeust, response) => {
	response.render("index", {
		useExternalStyles
	});
});

//MODULES

//SOCKET
io.on("connection", socket => {
	console.log(`Got connection from ${socket.request.connection.remoteAddress}`);
});

//STARTUP
const port = process.env.PORT || 3000;
function startServer() {
	server.listen(port, () => {
		console.log(`Started http server on ${port}`);
	});
}

startServer();