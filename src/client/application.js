import "./application.scss";

import * as services from "./services";

//PLAYGROUND
services.server.on$("test")
	.map(d => d + " whao")
	.subscribe(item => {
		console.log(`Got ${item} from server!`);
	});

services.server.status$
	.subscribe(status => console.log(status));

//AUTH

//COMPONENTS

//BOOTSTRAP
services.socket.connect();