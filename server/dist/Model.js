// --------------------------------------------------------------------------------------
// ---
// ---
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------
"use strict";
const ALL_TEAMS = ["Bayern München", "VfL Wolfsburg", "Borussia Mönchengladbach", "Bayer 04 Leverkusen", "FC Schalke 04", "FC Augsburg", "TSG Hoffenheim", "Eintracht Frankfurt", "Werder Bremen", "Borussia Dortmund", "1. FSV Mainz 05", "1. FC Köln", "Hertha BSC", "Hannover 96", "SC Freiburg", "Hamburger SV", "SC Paderborn", "VfB Stuttgart"];

class Model {
	constructor(snapshot) {
		this.teams = snapshot.teams;
		this.selectedTeam = snapshot.selectedTeam;
	}

	teamSelected(team) {
		if (this.selectedTeam === team) {
			this.selectedTeam = null;
		} else {
			this.selectedTeam = team;
		}
	}

	getSelectedTeam() {
		return this.selectedTeam;
	}

	snapshot() {
		return {
			teams: this.teams,
			selectedTeam: this.selectedTeam
		};
	}

	static emptySnapshot() {
		return {
			teams: ALL_TEAMS,
			selectedTeam: null
		};
	}
}

module.exports = Model;