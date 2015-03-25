// --------------------------------------------------------------------------------------
// ---
// ---
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------
"use strict";
import React from '../libs/react/react';
import {TeamService} from './TeamService';
import {TeamComponent} from './TeamComponent'

const teamService = new TeamService();

React.render(
	<TeamComponent teamService={teamService} />,
	document.getElementById('teams')
);
