import React, { Component } from 'react';
import Form from '../Form/Form';
import Message from '../Message/Message';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { messages: [{ id: 1, content: 'hello world' }] };
	}
	render() {
		const { messages } = this.state;
		return (
			<div>
				<h1>Chat App</h1>
				<Form />
				<ul>
					{messages.map(message => {
						return <Message key={message.id} message={message} />;
					})}
				</ul>
			</div>
		);
	}
}

export default App;
