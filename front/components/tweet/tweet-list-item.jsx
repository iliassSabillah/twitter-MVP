import React from 'react';

export default class TweetsListItem extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.tweet}</td>
				<td>
					<button>Delete</button>
				</td>
			</tr>
		)
	}
}