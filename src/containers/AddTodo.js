import React, {useState} from 'react';

import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index_act.js';
import monkeySound from '../utils/monkeySound.js';

// import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



// function rotateMonkey() {
//     let element = document.getElementById('addTodo')
//     ReactDOM.findDOMNode(element).style.transform = this.state.isClicked ? 'rotate(30deg)' : '';
// }





const AddTodo = ( {dispatch} ) => {

    const [startDate, setStartDate] = useState();

 const handleChange = date => {
    setStartDate(
      date
    );
  };


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
                            date: startDate
                        }));
                            input.value = '';
                            } }>
            
                <input className='inputCSS' placeholder="What do I have to do?" type="text" ref={el => (input = el)} />
                
                <DatePicker placeholder="Pick a deadline date"
                    selected={startDate}
                    onChange={handleChange}
              
                />

                
                
                <button id='addTodo' onClick={() =>
                   { monkeySound.play(); 
                    // rotateMonkey()
                    } } type="submit"> Add Todo</button>
    
            </form>

            
        </div>
       
    );
}


// when one uses the function connect, it returns another function
export default connect()(AddTodo);