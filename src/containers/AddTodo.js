import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index_act.js';
import UIfx from 'uifx';
import Monkey_sound from '../sounds/Monkey_sound.mp3';


const AddTodo = ( {dispatch} ) => {

 // create onClick function
const monkeySound = new UIfx(
  Monkey_sound,
  {
    volume: 0.4, 
    throttleMs: 100
  }
) 
    monkeySound.play();
    



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
                <button  type="submit"> Add Todo</button>
            </form>

        </div>

    );
}


// when one uses the function connect, it returns another function
export default connect()(AddTodo);