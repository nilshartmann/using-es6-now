"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

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
"use strict";

var React = _interopRequire(require("../libs/react/react"));

var TeamComponent = exports.TeamComponent = (function (_React$Component) {
	function TeamComponent() {
		_classCallCheck(this, TeamComponent);

		this.state = { selectedTeam: null };
	}

	_inherits(TeamComponent, _React$Component);

	_createClass(TeamComponent, {
		setSelectedTeam: {
			value: function setSelectedTeam(team) {
				if (team === this.state.selectedTeam) {
					this.setState({ selectedTeam: null });
				} else {
					this.setState({ selectedTeam: team });
				}
			}
		},
		render: {
			value: function render() {
				var _this = this;

				var teams = this.props.teamService.getAllTeams();
				return React.createElement(
					"div",
					{ className: "collection z-depth-2" },
					teams.map(function (team) {
						var badge = "";
						if (team === _this.state.selectedTeam) {
							badge = React.createElement(
								"span",
								{ className: "badge" },
								React.createElement("i", { className: "mdi-action-favorite red-text text-lighten-2" })
							);
						}
						return React.createElement(
							"a",
							{ key: team, className: "collection-item grey-text text-darken-7", onClick: _this.setSelectedTeam.bind(_this, team) },
							team,
							" ",
							badge
						);
					})
				);
			}
		}
	});

	return TeamComponent;
})(React.Component);