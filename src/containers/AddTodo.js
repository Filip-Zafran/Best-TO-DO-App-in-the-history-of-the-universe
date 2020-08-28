import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index_act.js';
import UIfx from 'uifx';
import Monkey_sound from '../sounds/Monkey_sound.mp3';

import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



const AddTodo = ( {dispatch} ) => {

 // create onClick function on button 
const monkeySound = new UIfx(
  Monkey_sound,
  {
    volume: 0.4, 
    throttleMs: 100
  }
) 
    monkeySound.play();
    


// CALENDAR
    // install react-datepicker 
    //install --save prop-types
//     class Example extends React.Component {
//   state = {
//     startDate: new Date()
//   };
 
//   handleChange = date => {
//     this.setState({
//       startDate: date
//     });
//   };
 




    let input;
    return (
    
        <div>
            
   
            <form
                className='formCSS'
                onSubmit={
                    e => {
                        e.preventDefault();
                        
            if (!input.value.trim()){
                     return
                        }
                        
                     dispatch(addTodo(input.value));
                        input.value = '';
                            }
             }>
            
                <input className='inputCSS' type="text" ref={el => (input = el)} />
                <button type="submit"> Add Todo</button>
   

                 {/* <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
            /> */}


            </form>

            
        </div>


       
    );
}


// when one uses the function connect, it returns another function
export default connect()(AddTodo);