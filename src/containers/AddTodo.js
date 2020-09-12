import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index_act.js';
import monkeySound from '../utils/monkeySound.js';
import GorillaSurf from '../utils/GorillaSurf.js';
// import GorillaSurfOut from '../utils/GorillaSurfOut.js';
// import MonkeyPic from '../utils/MonkeyPicture.js';
import FistBump from '../utils/FistBump.js';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import MonkeyPic from '../utils/MonkeyPicture.js';
import { motion } from 'framer-motion';


const AddTodo = ( {dispatch} ) => {

    const [startDate, setStartDate] = useState();
    const [showFistBump, setShowFistBump] = useState(false);

//     const MonkeyPicAnimation = {
//        <motion.img
//         transition={{ duration: 0.5 }
// }
//         animate={{ rotate: [0, -30, 0]}}
//  >};

 const handleChange = date => {
    setStartDate(
      date
    );
  };


    let input;
    return (
    
        <div>

            <MonkeyPic />
            
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
                 
                <button id='addTodo' onClick={() => {
                    monkeySound.play(); 
                    setShowFistBump(true);
                    setTimeout(() => { 
                        setShowFistBump(false);
                    }, 1000);
                                        // MonkeyPic();
                } } type="submit"> Add Todo</button>
    
            </form>

              <GorillaSurf />
            {showFistBump && <FistBump />}
            
        </div>
       
    );
}


// when one uses the function connect, it returns another function
export default connect()(AddTodo);

