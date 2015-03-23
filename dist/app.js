// --------------------------------------------------------------------------------------
// ---
// ---
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------
"use strict";

var TeamService = require("./TeamService").TeamService;

var TeamComponent = require("./TeamComponent").TeamComponent;

var TeamComponentModel = require("./TeamComponentModel").TeamComponentModel;

// setup components
var teamService = new TeamService();
var teamComponentModel = new TeamComponentModel(teamService);
var teamComponent = new TeamComponent(document.getElementById("teams"), teamComponentModel);

// Render Team Selection Panel
teamComponent.render();