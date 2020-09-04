import React from 'react';
import wooHooSound from '../utils/wooHoo.js'

const Todo = ({ onClick, completed, text }) => { 

    function wooHooEverySecondClick() {
        var state = false;
        
    if (state == false) {
            onClick();
            wooHooSound.play();
            state = true;
          }

    else {
         onClick();
         state = false;
           }
}

    return (
        <li className="bananaLi"
            onClick={() => {
                onClick();
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