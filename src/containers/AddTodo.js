import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index_act.js';
import monkeySound from '../utils/monkeySound.js';

import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import  * as $ from 'jquery';

// var rotate_factor = 0;

// function rotateMonkey(e) {
//     rotate_factor =+ 1;
//     var rotate_angle = (40 * rotate_factor) % 360;
//      $(e).rotate({angle:rotate_angle});
// }



const AddTodo = ( {dispatch} ) => {

    let input;
    return (
    
        <div>
               
            <form
                className='formCSS'
                onSubmit={
                    e => {
                        e.preventDefault();
                        
                        if (!input.value.trim()) {
                            return   }
                        
                        dispatch(addTodo({
                            text: input.value,
                            //date: date
                        }));
                            input.value = '';
                            } }>
            
                <input className='inputCSS' type="text" ref={el => (input = el)} />
                <DatePicker
                    onChange={(value) => console.log(value)}
                />
                
                <button onClick={() =>  
                    monkeySound.play();
                             } type="submit"> Add Todo</button>
    

            </form>

            
        </div>


       
    );
}


// when one uses the function connect, it returns another function
export default connect()(AddTodo);