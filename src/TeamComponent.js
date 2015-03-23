// --------------------------------------------------------------------------------------
// ---
// --- A Ui Component that allows a user to pick a favorite team out of a list of teams
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------
import $ from 'libs/jquery/dist/jquery'
"use strict";

export class TeamComponent {
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

