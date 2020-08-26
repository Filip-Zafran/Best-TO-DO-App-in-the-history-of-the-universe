import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index_act.js';

const AddTodo = ( {dispatch} ) => {



    let input;

    return (
    
        <div>
            
             <form
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
            
                <input type="text" ref={el => (input = el)} />
                <button type="submit"> Add Todo</button>
            </form>

        </div>

    );
}


// when one uses the function connect, it returns another function
export default connect()(AddTodo);