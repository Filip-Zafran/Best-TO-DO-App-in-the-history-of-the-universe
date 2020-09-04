import React from 'react';
import Todo from './Todo';
import DeadlineList from './DeadlineList';


const TodoList = ({ todos, toggleTodo}) => (
    
    <table>
           <tbody>
        <tr>
            <th>TASK</th>
            <th>DEADLINE</th>
            </tr>
                  <tr>
            <td>
                {todos.map(todo => ( 
            <Todo
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onClick={() => toggleTodo(todo.id)} />
        )    )}
</td>
            <td
            className="deadlineTd"
            >   {todos.map(todo => ( 

            <DeadlineList
                key={todo.id}
                text={todo.startDate}
                completed={todo.completed}
                onClick={() => toggleTodo(todo.id)} />
        )    )}</td>
        </tr>

   </tbody>
</table>

)

export default TodoList;
    