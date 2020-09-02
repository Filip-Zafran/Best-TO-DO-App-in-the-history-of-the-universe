import React from 'react';

const DeadlineList = ({ onClick, completed, value }) => (
    
    
 

    
    <li className="deadlineLi"
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
     >
 
       {value}

    </li>
);



export default DeadlineList; 