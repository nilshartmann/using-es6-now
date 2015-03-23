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
	constructor() {
		this.state = {selectedTeam: null};
	}

	setSelectedTeam(team) {
		if (team === this.state.selectedTeam) {
			this.setState({selectedTeam: null});
		} else {
			this.setState({selectedTeam: team});
		}
	}

	render() {
		const teams = this.props.teamService.getAllTeams();
		return (
			<div className="collection z-depth-2">
			{teams.map((team) => {
				let badge = '';
				if (team === this.state.selectedTeam) {
					badge = <span className="badge"><i className="mdi-action-favorite red-text text-lighten-2"></i></span>;
				}
				return <a key={team} className="collection-item grey-text text-darken-7" onClick={this.setSelectedTeam.bind(this, team)}>{team} {badge}</a>
			})}
			</div>
		);
	}
}

