import React from 'react';
import Todo from './Todo'



const TodoList = ({ todos, toggleTodo}) => (
    <ul>
        {todos.map(todo => ( 
            <Todo
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onClick={() => toggleTodo(todo.id)} />
        )    )}
            
</ul>


)

export default TodoList;
    