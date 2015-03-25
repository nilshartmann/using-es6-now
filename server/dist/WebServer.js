// --------------------------------------------------------------------------------------
// ---
// ---
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------

"use strict";

// koa webserver
var session = require("koa-session");
var koa = require("koa");
var serve = require("koa-static");
var route = require("koa-route");
var json = require("koa-json");
var parse = require("co-body");

class Routes {
	constructor(app) {
		this.app = app;

		this.jsonEnabled = false;
	}

	get(path, handler) {
		this._enableJson();
		this.app.use(route.get(path, handler));
		return this;
	}

	post(path, handler) {
		this._enableJson();
		this.app.use(route.post(path, handler));
		return this;
	}

	_enableJson() {
		if (!this.jsonEnabled) {
			this.app.use(json());
			this.jsonEnabled = true;
		}
	}
}

class WebServer {
	constructor() {
		this.app = koa();

		this.app.keys = ["iron maiden - en vivo"];
		this.app.use(session(this.app));

		this._routes = new Routes(this.app);
	}

	routes() {
		return this._routes;
	}

	addInterceptor(interceptor) {
		this.app.use(interceptor);

		return this;
	}

	addStaticHandler(folder) {
		this.app.use(serve(folder));
		return this;
	}

	run(port) {
		port = port || 3000;
		this.app.listen(port);
	}
	//
	//static *toJson(ctx) {
	//	console.log("BLA STATIC");
	//	return yield parse.json(ctx);
	//}

}

module.exports = WebServer;

WebServer.toJson = function* (ctx) {
	return yield parse.json(ctx);
};