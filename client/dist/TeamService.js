"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
	value: true
});
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
		method: "post",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"
		},
		body: body
	});
}

var TeamService = exports.TeamService = (function () {
	function TeamService() {
		_classCallCheck(this, TeamService);
	}

	_createClass(TeamService, {
		getModel: {
			/** Read the whole current model from server */

			value: function getModel(callback) {
				fetch("/api/teams").then(function (response) {
					return response.json();
				}).then(function (json) {
					callback(json);
				})["catch"](function (ex) {
					console.log("parsing failed", ex);
				});
			}
		},
		teamSelected: {

			/** Posts the new selected team to the server */

			value: function teamSelected(team, callback) {
				post("/api/teams", { selectedTeam: team }).then(function (response) {
					return response.json();
				}).then(function (json) {
					callback(json.teamSelected);
				});
			}
		}
	});

	return TeamService;
})();