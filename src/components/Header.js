import React, { useState } from 'react';
import './myStyles.css';
import MonkeyPic from '../utils/MonkeyPicture.js';
import FistBump from '../utils/FistBump.js';

// listener connect

function Header(props) {
	const [ showFistBump, setShowFistBump ] = useState(false);

	// if true we set it to primary, if not we set an empty string
	let className = props.primary ? 'primary' : '';

	return (
		<div className="header">
			<h1 className={className}>Monkey Chores</h1>
			<MonkeyPic rotate={showFistBump} />
		</div>
	);
}

export default Header;
