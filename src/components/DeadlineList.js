import React from 'react';

const DeadlineList = ({ onClick, completed, value }) => {
	return (
		<li
			className="deadline-li"
			onClick={onClick}
			style={{
				textDecoration: completed ? 'line-through' : 'none'
			}}
		>
			{new Intl.DateTimeFormat('en-US').format(new Date(value))}
		</li>
	);
};

export default DeadlineList;
