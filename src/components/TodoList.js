import React from 'react'; 
import Todo from './Todo';
import DeadlineList from './DeadlineList';

// PARENT TO TODO
// we are sending 'toggleTodo' to Todo.js as a prop
// TU SE VIDI

const TodoList = ({ todos, toggleTodo}) => (
    
    <table>
           <tbody>
        <tr>
            <th className='taskTH'>TASK</th>
            <th className='deadlineTH'>DEADLINE</th>
            </tr>
            
            <tr>
            <td className='taskTD'>
                {todos.map(todo => ( 
                    <Todo
                       
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                toggleTodoItem={() => toggleTodo(todo.id)} />
        )    )}
</td>
            <td
            className="deadlineTd"
            >   {todos.map(todo => ( 

            <DeadlineList
                key={todo.id}
                text={todo.date}
                completed={todo.completed}
                onClick={() => toggleTodo(todo.id)} />
        )    )}</td>
        </tr>

   </tbody>
</table>

)

export default TodoList;
    