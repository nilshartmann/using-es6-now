// --------------------------------------------------------------------------------------
// ---
// --- The Model for a TeamComponent
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------
"use strict";

export class TeamComponentModel {
	constructor(teamService) {
		this.teamService = teamService;
		this.selectedTeam = null;

		// holds registered listener
		this.listener = new Set();
	}

	addListener(l) {
		this.listener.add(l);
	}

	getAllTeams() {
		return this.teamService.getAllTeams();
	}

	isSelectedTeam(team) {
		return (team === this.selectedTeam);
	}

	setSelectedTeam(team) {
		if (this.isSelectedTeam(team)) {
			this.selectedTeam = null;
		} else {
			this.selectedTeam = team;
		}

		// inform listeners
		for (let l of this.listener) {
			l();
		}
	}
}