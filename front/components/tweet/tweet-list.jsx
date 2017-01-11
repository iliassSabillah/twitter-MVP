import _ from 'lodash';
import React from 'react';
import TweetsListItem from './tweet-list-item';

class TweetListHeader extends React.Component {
	render() {
		return (
			<thead>
				<tr>
					<th>Tweet</th>
					<th>Action</th>
				</tr>
			</thead>
		)
	}
}

export default class TweetsList extends React.Component {
	renderItems() {
		const props = _.omit(this.props, 'tweets')
		return _.map(this.props.tweets, (tweet, index) => <TweetsListItem key={index} {...tweet} />)
	}
	render() {
		return (
			<table>
				<TweetListHeader />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		)
	}
}