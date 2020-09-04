import React from 'react';
import whooshSound from '../utils/whooshSound.js'

const Todo = ({ onClick, completed, text }) => { 
    return (
        <li className="bananaLi"
            onClick={() => {
                onClick();
                whooshSound.play();
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