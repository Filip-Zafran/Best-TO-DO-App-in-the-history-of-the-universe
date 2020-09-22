import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index_act.js';
import monkeySound from '../utils/monkeySound.js';
import GorillaSurf from '../utils/GorillaSurf.js';
import FistBump from '../utils/FistBump.js';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import MonkeyPic from '../utils/MonkeyPicture.js';
import { motion } from 'framer-motion';


const AddTodo = ( {dispatch} ) => {

    const [startDate, setStartDate] = useState();
    const [showFistBump, setShowFistBump] = useState(false);

 const handleChange = date => {
    setStartDate(
      date
    );
  };


    return (
    
        <div>
            <MonkeyPic />
            
               <form
                    onSubmit={ 
                    e => {
                        e.preventDefault();
           
                        // Validation 
                        if (e.currentTarget[0].value.length < 1) {
                             return 
                        } 

                        // we are checking if the variable value is non empty (is present)
                        if (!startDate) {
                            return
                        } 


                        console.log("dispatch")
                        
                        dispatch(addTodo({
                            text: e.currentTarget[0].value,
                            date: startDate
                        }));
                            e.currentTarget[0].value = '';
                            } }>
            
                <div className="inputContainer">

                    <input
                        id="inputCSS"
                        placeholder="Wat I gotta do?"
                        type="text" />
                
                    <DatePicker
                        className="DatePicker"
                        placeholderText=" &#128197; 	&nbsp;Pick a deadline date"
                        selected={startDate}
                        onChange={handleChange}
                    />
                </div> 
                 
                <button id='addTodo' onClick={() => {
                    monkeySound.play(); 
                    setShowFistBump(true);
                    setTimeout(() => { 
                        setShowFistBump(false);
                    }, 1000);
                             
                } } type="submit"> Add Todo</button>
    
            </form>

              <GorillaSurf />
            {showFistBump && <FistBump />}
            
        </div>
       
    );
}

// when one uses the function connect, it returns another function
export default connect()(AddTodo);

