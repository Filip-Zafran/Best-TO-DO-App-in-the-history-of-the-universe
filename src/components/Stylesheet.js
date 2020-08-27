import React from 'react';
import './myStyles.css'



function Stylesheet(props) {

    // if true we set it to primary, if not we set an empty string
let className = props.primary ? 'primary' : ''

    return (
        <div>
           <h1 className={className}>Monkey Chores</h1> 

    </div>

)
}

export default Stylesheet;