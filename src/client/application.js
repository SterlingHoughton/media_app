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
require("./components/player/player");
require("./components/users/users");
require("./components/chat/chat");
require("./components/playlist/playlist");

//BOOTSTRAP
services.socket.connect();

services.usersStore.state$.subscribe(state => {
	console.log(state);
});