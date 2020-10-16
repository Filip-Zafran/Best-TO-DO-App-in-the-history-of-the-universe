import React from 'react';

const DeadlineList = ({ onClick, completed, value }) => {
	const dateObject = new Date(value);
	const date = `${dateObject.getDate()}.${dateObject.getMonth()}.${dateObject.getFullYear()}, ${dateObject.getHours()}:${dateObject.getMinutes()}h`;

	console.log(date);

	return (
		<li
			className="deadline-li"
			onClick={onClick}
			style={{
				textDecoration: completed ? 'line-through' : 'none'
			}}
		>
			{date}
		</li>
	);
};

export default DeadlineList;
