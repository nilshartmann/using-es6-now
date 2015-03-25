// --------------------------------------------------------------------------------------
// ---
// --- Very simple Api for the team selection component.
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var TeamServer = _interopRequire(require("./TeamServer"));

const PORT = 3000;

console.log("----------------------------------------------------");
console.log(" - Creating TeamServer ...");
var teamServer = new TeamServer();

console.log(" - ... initializing ...");
teamServer.init();

console.log(" - ... starting ...");
teamServer.run(PORT);

console.log(` - ... and running at http://localhost:${ PORT }`);
console.log("----------------------------------------------------");