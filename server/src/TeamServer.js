// --------------------------------------------------------------------------------------
// ---
// ---
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------
"use strict";

import WebServer from './WebServer';
import Model from './Model';

export default class TeamServer extends WebServer {
	init() {
		this.addStaticHandler(`${__dirname}/../../client`);
		this.addInterceptor(this.modelHandlerInterceptor);
		this.routes()
			.get('/api/teams', this.getTeams)
			.post('/api/teams', this.selectTeam);
	}

	*modelHandlerInterceptor(next) {
		// Create Model from current user session
		this.model = TeamServer._modelFromSession(this);

		// invoke next handler
		yield next;

		// write snapshot of model to session
		TeamServer._storeModelInSession(this, this.model);
	}

	*getTeams() {
		this.body = this.model.snapshot();
	}

	*selectTeam() {
		// Get selected team from post content
		var data = yield WebServer.toJson(this);

		// select team
		this.model.teamSelected(data.selectedTeam);

		this.body = {
			teamSelected: this.model.getSelectedTeam()
		};
	}

	static _modelFromSession(ctx) {
		if (!ctx.session.modelData) {
			console.log("Create new Model");
			ctx.session.modelData = Model.emptySnapshot();
		}

		return new Model(ctx.session.modelData);
	}

	static _storeModelInSession(ctx, model) {
		ctx.session.modelData = model.snapshot();
	}
}

