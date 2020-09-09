import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index_act.js';
import monkeySound from '../utils/monkeySound.js';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



function rotateF() {
         var img = document.getElementById('monkeyFist');
        img.id = 'monkeyFist';
}



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
            
                <div className="inputContainer">

                    <input
                        id="inputCSS"
                        placeholder="Wat I gotta do?"
                        type="text" ref={el => (input = el)} />
                
                    <DatePicker
                        className="DatePicker"
                        placeholderText=" &#128197; 	&nbsp;Pick a deadline date"
                        selected={startDate}
                        onChange={handleChange}
                          />

                </div>
                 
                <button id='addTodo' onClick={() =>
                   { monkeySound.play(); 
                    // rotateFist();
                    } } type="submit"> Add Todo</button>
    
            </form>

            
        </div>
       
    );
}


// when one uses the function connect, it returns another function
export default connect()(AddTodo);