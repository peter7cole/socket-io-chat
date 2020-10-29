import React, { Component } from 'react';

export default class Form extends Component {
	state = {
		content: '',
	};

	onSubmit = event => {
		event.preventDefault();
		this.props.addMessage(
			this.state.content ? this.state.content : 'Empty Message'
		);
		this.setState({ content: '' });
	};

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<label htmlFor="entry">Entry</label>
					<textarea
						className="u-full-width"
						type="text"
						name="content"
						value={this.state.content}
						onChange={this.onChange}
						autoComplete="off"
						autoFocus
					/>
					<input
						className="button-primary"
						id="entry"
						type="submit"
						value="Submit"
					></input>
				</form>
			</div>
		);
	}
}
