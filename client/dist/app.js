// --------------------------------------------------------------------------------------
// ---
// ---
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("../libs/react/react"));

var TeamService = require("./TeamService").TeamService;

var TeamComponent = require("./TeamComponent").TeamComponent;

var teamService = new TeamService();

React.render(React.createElement(TeamComponent, { teamService: teamService }), document.getElementById("teams"));