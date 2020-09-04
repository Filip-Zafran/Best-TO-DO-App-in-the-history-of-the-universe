import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index_act.js';
import monkeySound from '../utils/monkeySound.js';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


function rotateMonkey() {
         var img = document.getElementById('monkeyFace');
        img.className = 'MonkeyPic';
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
                
                <DatePicker
                    placeholderText="Pick a deadline date"
                    selected={startDate}
                    onChange={handleChange}
                />

                
                 
                <button id='addTodo' onClick={() =>
                   { monkeySound.play(); 
                    rotateMonkey();
                    } } type="submit"> Add Todo</button>
    
            </form>

            
        </div>
       
    );
}


// when one uses the function connect, it returns another function
export default connect()(AddTodo);