import React from 'react';
import TodoContainer from '../containers/ToDoContainer';
import DeadlineList from './DeadlineList';
import BananaBullet from '../utils/BananaBullet';

// PARENT TO TODO
// we are sending 'toggleTodo' to Todo.js as a prop

const TodoList = ({ todos, toggleTodo }) => (
	<table>
		<tbody>
			<tr>
				<th className="task-th-bullet"> </th>
				<th className="task-th">TASK</th>
				<th className="deadline-th">DEADLINE</th>
			</tr>

			<tr>
				<td className="banana-td">
					{todos.map((todo, index) => (
						<BananaBullet
							key={index}
							value={todo.date}
							completed={todo.completed}
							onClick={() => toggleTodo(todo.id)}
						/>
					))}
				</td>

				<td className="task-td">
					{todos.map((todo, index) => (
						<TodoContainer
							key={index}
							text={todo.text}
							completed={todo.completed}
							toggleTodoItem={() => toggleTodo(todo.id)}
						/>
					))}
				</td>
				<td>
					{todos.map((todo, index) => (
						<DeadlineList
							key={index}
							value={todo.date}
							completed={todo.completed}
							onClick={() => toggleTodo(todo.id)}
						/>
					))}
				</td>
			</tr>
		</tbody>
	</table>
);

export default TodoList;
