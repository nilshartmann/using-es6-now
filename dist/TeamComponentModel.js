"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
	value: true
});
// --------------------------------------------------------------------------------------
// ---
// --- The Model for a TeamComponent
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------
"use strict";

var TeamComponentModel = exports.TeamComponentModel = (function () {
	function TeamComponentModel(teamService) {
		_classCallCheck(this, TeamComponentModel);

		this.teamService = teamService;
		this.selectedTeam = null;

		// holds registered listener
		this.listener = new Set();
	}

	_createClass(TeamComponentModel, {
		addListener: {
			value: function addListener(l) {
				this.listener.add(l);
			}
		},
		getAllTeams: {
			value: function getAllTeams() {
				return this.teamService.getAllTeams();
			}
		},
		isSelectedTeam: {
			value: function isSelectedTeam(team) {
				return team === this.selectedTeam;
			}
		},
		setSelectedTeam: {
			value: function setSelectedTeam(team) {
				if (this.isSelectedTeam(team)) {
					this.selectedTeam = null;
				} else {
					this.selectedTeam = team;
				}

				// inform listeners
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = this.listener[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var l = _step.value;

						l();
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
		}
	});

	return TeamComponentModel;
})();