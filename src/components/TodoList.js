import React from 'react';
import Todo from './Todo'



const TodoList = ({ todos, toggleTodo}) => (
    <ul>
        {todos.map(todo => ( 
            <Todo />
        )    )}
         
</ul>


)

export default TodoList;
    