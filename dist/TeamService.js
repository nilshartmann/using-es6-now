"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
	value: true
});
// --------------------------------------------------------------------------------------
// ---
// --- TeamService: A Service returning a list of Teams. (mock implementation)
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------

var TeamService = exports.TeamService = (function () {
	function TeamService() {
		_classCallCheck(this, TeamService);
	}

	_createClass(TeamService, {
		getAllTeams: {
			value: function getAllTeams() {
				return ["Bayern München", "VfL Wolfsburg", "Borussia Mönchengladbach", "Bayer 04 Leverkusen", "FC Schalke 04", "FC Augsburg", "TSG Hoffenheim", "Eintracht Frankfurt", "Werder Bremen", "Borussia Dortmund", "1. FSV Mainz 05", "1. FC Köln", "Hertha BSC", "Hannover 96", "SC Freiburg", "Hamburger SV", "SC Paderborn", "VfB Stuttgart"];
			}
		}
	});

	return TeamService;
})();