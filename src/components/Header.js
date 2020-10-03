import React, { useEffect } from 'react';
import './myStyles.css';
import MonkeyPic from '../utils/MonkeyPicture.js';
import FistBump from '../utils/FistBump.js';
import WeGo from '../utils/WeGo.js';
import { connect } from 'react-redux';

// listener connect



function Header(props) {
	// if true we set it to primary, if not we set an empty string
	let className = props.primary ? 'primary' : '';


useEffect(() => {
	if (props.soundON) {
		setTimeout(function Play() {
			WeGo.play();
		}, 800);
	}
	}, [] )

	


	return (
		<div className="header">
			<h1 className={className}>Monkey Chores</h1>
			<div className="monkey-container">
				{props.showAnimation || <FistBump />}
				<MonkeyPic rotate={props.showAnimation} />
			</div>
		</div>
	);
}

const mapStateToProps = function(state) {
	return { showAnimation: state.showAnimation, soundON: state.sound };
};

export default connect(mapStateToProps)(Header);
