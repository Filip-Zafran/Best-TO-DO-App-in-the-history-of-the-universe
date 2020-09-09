
// CHILD TO TODOLIST
// we are receiving 'toggleTodo' from TodoList.js as a prop
// a sta je "toggleTodoItem"

import React, { useState } from 'react';
import wooHooSound from '../utils/wooHoo.js'

const Todo = (props) => { 

    const { toggleTodoItem, completed, text } = props;

    let [ shouldPlaySound, setShouldPlaySound ] = useState(true);

    function wooHooEverySecondClick() {
        if (shouldPlaySound) {   
            wooHooSound.play();
            setShouldPlaySound(false);
        } else {
            setShouldPlaySound(true);
        }
    }

    return (
        <li className="bananaLi"
            onClick={() => {
                toggleTodoItem();
                wooHooEverySecondClick();
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