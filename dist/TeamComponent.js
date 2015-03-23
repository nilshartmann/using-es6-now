"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
	value: true
});
// --------------------------------------------------------------------------------------
// ---
// --- A Ui Component that allows a user to pick a favorite team out of a list of teams
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------

var $ = _interopRequire(require("libs/jquery/dist/jquery"));

"use strict";

var TeamComponent = exports.TeamComponent = (function () {
	function TeamComponent(domElement, teamModel) {
		var _this = this;

		_classCallCheck(this, TeamComponent);

		this.parentElement = $(domElement);
		this.teamModel = teamModel;

		// register listener to re-render on data change
		this.teamModel.addListener(function () {
			_this.render();
		});
	}

	_createClass(TeamComponent, {
		render: {
			value: function render() {
				var _this = this;

				// Remove all children
				this.parentElement.empty();

				// receive teams from store
				var teams = this.teamModel.getAllTeams();

				// create new component elements
				var element = $("<div class=\"collection z-depth-2\">").appendTo(this.parentElement);
				teams.forEach(function (team) {
					var item = $("<a class=\"collection-item grey-text text-darken-7\">" + team + "</a>");
					if (_this.teamModel.isSelectedTeam(team)) {
						item.append($("<span class=\"badge\"><i class=\"mdi-action-favorite red-text text-lighten-2\"></i></span>"));
					}

					item.appendTo(element).click(function () {
						// inform the model about user's choice
						_this.teamModel.setSelectedTeam(team);
					});
				});
			}
		}
	});

	return TeamComponent;
})();