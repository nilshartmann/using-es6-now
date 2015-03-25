// --------------------------------------------------------------------------------------
// ---
// --- A Ui Component that allows a user to pick a favorite team out of a list of teams
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------
"use strict";
import React from '../libs/react/react';

export class TeamComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};

		this.readInitialState();
	}

	readInitialState() {
		this.props.teamService.getModel((model) => {
			this.setState(model);
		});
	}

	setSelectedTeam(team) {
		this.props.teamService.teamSelected(team, (selectedTeam) => {
			this.state.selectedTeam = selectedTeam;
			this.setState(this.state);
		});
	}

	render() {
		function teamCollection() {
			if (!this.state.teams) {	return; }

			return this.state.teams.map((team) => {
				let badge = '';
				if (team === this.state.selectedTeam) {
					badge = <span className="badge"><i className="mdi-action-favorite red-text text-lighten-2"></i></span>;
				}
				return <a key={team} className="collection-item grey-text text-darken-7" onClick={this.setSelectedTeam.bind(this, team)}>{team} {badge}</a>
			})
		}

		return (
			<div className="collection z-depth-2">
				{teamCollection.bind(this)()}
			</div>
		);
	}
}



