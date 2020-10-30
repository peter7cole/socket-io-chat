import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from '../Form/Form';
import Message from '../Message/Message';
import './App.scss';

export default class App extends Component {
	state = {
		messages: [],
		idList: [],
	};

	addMessage = content => {
		const newMessage = {
			id: nanoid(),
			content,
		};
		this.setState({
			messages: [...this.state.messages, newMessage],
			idList: [...this.state.idList, newMessage.id],
		});
	};

	render() {
		const { messages } = this.state;
		return (
			<div>
				<header>
					<h1 className="title">Chat App</h1>
				</header>
				<main>
					<Form addMessage={this.addMessage} />
					<ul>
						{messages.map(message => {
							return <Message key={message.id} message={message} />;
						})}
					</ul>
				</main>
			</div>
		);
	}
}
