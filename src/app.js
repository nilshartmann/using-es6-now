// --------------------------------------------------------------------------------------
// ---
// ---
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------
"use strict";
import {TeamService} from './TeamService';
import {TeamComponent} from './TeamComponent';
import {TeamComponentModel} from './TeamComponentModel';

// setup components
const teamService = new TeamService();
const teamComponentModel = new TeamComponentModel(teamService);
const teamComponent = new TeamComponent(document.getElementById('teams'), teamComponentModel);

// Render Team Selection Panel
teamComponent.render();
