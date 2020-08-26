import React from 'react';
import { connect } from 'react-redux';


const AddTodo = ( ) => {



    let input;

    return (
    
        <div>
            
            <form>
            
                <input type="text" ref={el => (input = el)} />
                <button type="submit"> Add Todo test</button>
            </form>

        </div>

    );
}


// when one uses the function connect, it returns another function
export default connect()(AddTodo);