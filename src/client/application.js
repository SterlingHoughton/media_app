import "./application.scss";

import * as services from "./services";

//PLAYGROUND
services.server
	.emitAction$("login", {username: "foo", password: "bar"})
	.subscribe(user => {
		console.log("We're logged in: " + user);
	}, error => {
		console.error(error);
	});

//AUTH

//COMPONENTS

//BOOTSTRAP
services.socket.connect();