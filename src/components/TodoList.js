import React, { useState } from 'react';
import TodoContainer from '../containers/ToDoContainer';
import DeadlineList from './DeadlineList';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import BananaBullet from '../utils/BananaBullet';

// PARENT TO TODO
// we are sending 'toggleTodo' to Todo.js as a prop

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
	const deleteClicked = (id) => {
		toggle();
		// if (window.confirm('del?')) {
		// 	removeTodo(id);
		// }
	};

	const [ modal, setModal ] = useState(false);
	const toggle = () => setModal(!modal);

	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th className="task-th-bullet"> </th>
						<th className="task-th">TASK</th>
						<th className="deadline-th">DEADLINE</th>
						<th className="task-th-x"> </th>
					</tr>

					{todos.map((todo) => (
						<tr key={todo.id}>
							<td className="banana-td">
								<BananaBullet
									value={todo.date}
									completed={todo.completed}
									onClick={() => toggleTodo(todo.id)}
								/>
							</td>
							<td className="task-td">
								<TodoContainer
									text={todo.text}
									completed={todo.completed}
									toggleTodoItem={() => toggleTodo(todo.id)}
								/>
							</td>
							<td>
								<DeadlineList
									value={todo.date}
									completed={todo.completed}
									onClick={() => toggleTodo(todo.id)}
								/>
							</td>
							<td className="task-td-x">
								<button className="task-button-x">
									<span className="span-x" value={todo.date} onClick={() => deleteClicked(todo.id)}>
										&nbsp;x&nbsp;
									</span>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Delete Todo?</ModalHeader>
				<ModalBody>Sure you wanna delete?</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggle}>
						Delete
					</Button>{' '}
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default TodoList;
