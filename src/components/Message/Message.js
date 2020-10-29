import React, { Component } from 'react';

export default class Message extends Component {
	render() {
		return (
			<div>
				<li id={this.props.message.id}>{this.props.message.content}</li>
			</div>
		);
	}
}
