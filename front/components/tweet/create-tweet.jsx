import React from 'react';

export default class CreateTweet extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null
		}
	}
	renderError() {
		if (!this.state.error) {
			return null;
		} else {
			return {this.state.error}
		}
	}
	render() {
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placeholder="What's Happening?" ref="createInput"/>
				<button>Tweet</button>
				{this.renderError()}
			</form>
		)
	}

	handleCreate(e) {
		e.preventDefault()

		const createInput = this.refs.createInput
		const tweet = createInput.value
		const validateInput = this.validateInput(tweet)

		if (validateInput) {
			this.setState({error: validateInput})
		}

		this.setState({error: null})
		this.props.createTweet(tweet)
		this.refs.createInput.value = ''
	}

	validateInput(tweet) {
		if(!tweet) {
			return "Tweet Something";
		} else {
			return null
		}
	}
 }