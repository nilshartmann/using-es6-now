// --------------------------------------------------------------------------------------
// ---
// --- TeamService: A Service communicating with the remote backend
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------

"use strict";

function post(url, body) {
	body = JSON.stringify(body);
	return fetch(url, {
		method:  'post',
		headers: {
			'Accept':       'application/json',
			'Content-Type': 'application/json'
		},
		body:    body
	});
}

export class TeamService {
	/** Read the whole current model from server */
	getModel(callback) {
		fetch('/api/teams')
			.then(function (response) {
				return response.json();
			}).then(function (json) {
				callback(json);
			}).catch(function (ex) {
				console.log('parsing failed', ex)
			});
	}

	/** Posts the new selected team to the server */
	teamSelected(team, callback) {
		post('/api/teams', {selectedTeam:team})
		.then(function (response) {
				return response.json();
			}).then(function (json) {
				callback(json.teamSelected);
			});
	}

}
