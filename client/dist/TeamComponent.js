"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
	function TeamComponent(props) {
		_classCallCheck(this, TeamComponent);

		_get(Object.getPrototypeOf(TeamComponent.prototype), "constructor", this).call(this, props);
		this.state = {};

		this.readInitialState();
	}

	_inherits(TeamComponent, _React$Component);

	_createClass(TeamComponent, {
		readInitialState: {
			value: function readInitialState() {
				var _this = this;

				this.props.teamService.getModel(function (model) {
					_this.setState(model);
				});
			}
		},
		setSelectedTeam: {
			value: function setSelectedTeam(team) {
				var _this = this;

				this.props.teamService.teamSelected(team, function (selectedTeam) {
					_this.state.selectedTeam = selectedTeam;
					_this.setState(_this.state);
				});
			}
		},
		render: {
			value: function render() {
				function teamCollection() {
					var _this = this;

					if (!this.state.teams) {
						return;
					}

					return this.state.teams.map(function (team) {
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
					});
				}

				return React.createElement(
					"div",
					{ className: "collection z-depth-2" },
					teamCollection.bind(this)()
				);
			}
		}
	});

	return TeamComponent;
})(React.Component);