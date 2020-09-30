import React from 'react';
import TodoContainer from '../containers/ToDoContainer';
import DeadlineList from './DeadlineList';
import BananaBullet from '../utils/BananaBullet';

// PARENT TO TODO
// we are sending 'toggleTodo' to Todo.js as a prop

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
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
							<span
								className="p-x"
								value={todo.date}
								completed={todo.completed}
								onClick={() => removeTodo(todo.id)}
							>
								&nbsp;x&nbsp;
							</span>
						</button>
					</td>
				</tr>
			))}
		</tbody>
	</table>
);

export default TodoList;

// dispatch(
// 						addTodo({
// 							text: e.currentTarget[0].value,
// 							date: startDate.getTime()
// 						})
// 					);
