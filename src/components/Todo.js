// CHILD TO TODOLIST
// we are receiving 'toggleTodo' from TodoList.js as a prop
// toggleTodoItem is a prop from ToDoList

import React, { useState } from 'react';
import wooHooSound from '../utils/wooHoo.js';

const Todo = (props) => {
	const { toggleTodoItem, completed, text } = props;

	function wooHooEverySecondClick() {
		if (!completed) {
			wooHooSound.play();
		}
	}

	return (
		<li
			className="bananaLi"
			onClick={() => {
				toggleTodoItem();

				if (props.soundON) {
					wooHooEverySecondClick();
				}
			}}
			style={{
				textDecoration: completed ? 'line-through' : 'none'
			}}
		>
			{text}
		</li>
	);
};

export default Todo;
