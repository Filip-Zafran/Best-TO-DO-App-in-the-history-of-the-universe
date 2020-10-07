import React from 'react';

let time = new Date().toLocaleString();

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Date().toLocaleString()
		};
	}
	componentDidMount() {
		this.intervalID = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}
	tick() {
		this.setState({
			time: new Date().toLocaleString()
		});
	}
	render() {
		return (
			<div className="clock-container">
				{' '}
				<p className="app-clock">
					<span className="today-text">Today is</span> <br />{' '}
					<span className="time-text">{this.state.time}</span>
				</p>
			</div>
		);
	}
}
export default Clock;
