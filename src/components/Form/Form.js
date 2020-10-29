import React, { Component } from 'react';

export default class Form extends Component {
	render() {
		return (
			<div>
				<form action="">
					<input autoComplete="off" autoFocus />
					<button>Send</button>
				</form>
			</div>
		);
	}
}
