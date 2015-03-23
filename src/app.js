// --------------------------------------------------------------------------------------
// ---
// ---
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------
"use strict";

class TeamService {
	getAllTeams() {
		return [
			'Bayern München',
			'VfL Wolfsburg',
			'Borussia Mönchengladbach',
			'Bayer 04 Leverkusen',
			'FC Schalke 04',
			'FC Augsburg',
			'TSG Hoffenheim',
			'Eintracht Frankfurt',
			'Werder Bremen',
			'Borussia Dortmund',
			'1. FSV Mainz 05',
			'1. FC Köln',
			'Hertha BSC',
			'Hannover 96',
			'SC Freiburg',
			'Hamburger SV',
			'SC Paderborn',
			'VfB Stuttgart'
		]
	}
}
// -----------------
class TeamComponentModel {
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
// -----
class TeamComponent {
	constructor(domElement, teamModel) {
		this.parentElement = $(domElement);
		this.teamModel = teamModel;

		// register listener to re-render on data change
		this.teamModel.addListener(() => {
			this.render();
		})
	}

	render() {
		// Remove all children
		this.parentElement.empty();

		// receive teams from store
		const teams = this.teamModel.getAllTeams();

		// create new component elements
		const element = $('<div class="collection z-depth-2">').appendTo(this.parentElement);
		teams.forEach((team) => {
			let item = $(`<a class="collection-item grey-text text-darken-7">${team}</a>`);
			if (this.teamModel.isSelectedTeam(team)) {
				item.append($('<span class="badge"><i class="mdi-action-favorite red-text text-lighten-2"></i></span>'));
			}

			item.appendTo(element).click(() => {
				// inform the model about user's choice
				this.teamModel.setSelectedTeam(team);
			})
		});
	}
}

// setup components
const teamService = new TeamService();
const teamComponentModel = new TeamComponentModel(teamService);
const teamComponent = new TeamComponent(document.getElementById('teams'), teamComponentModel);

// Render Team Selection Panel
teamComponent.render();
