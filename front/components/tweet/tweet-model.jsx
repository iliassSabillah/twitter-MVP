import React from 'react';
import CreateTweet from './create-tweet';
import TweetsList from './tweet-list';
import TweetsListItem from './tweet-list-item'

const tweets = [
{
	tweet: 'test tweet 1'
},
{
	tweet: 'test tweet 2'
}
]

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tweets
		}
	}
	render() {
		return (
			<div>
				<h1> Twitter App </h1>
				<CreateTweet createTweet={this.createTweet.bind(this)}/>
				<TweetsList 
									tweets={this.state.tweets}
									deleteTweet={this.deleteTweet.bind(this)} />
			</div>
		);
	}

	createTweet(tweet) {
		this.state.tweets.unshift({
			tweet
		});
		this.setState({tweets: this.state.tweets})
	}

	deleteTweet(tweetToDelete) {
		_.remove(this.state.tweets, tweet => tweets.tweet === tweetToDelete)
		this.setState({tweets: this.state.tweets})
	}
}